class TripsController < ApplicationController
    before_action :check_owner, only: [:update, :destroy]

    def index
        @trips = current_user.trips.sorted_by_start_date
        render json: @trips, status: 200
      end

    
    def show 
        @trip = trip_find
        @sorted_activities = @trip.sorted_activities
        if @trip.present?
            render json: { trip: @trip, activities: @sorted_activities }
        else 
            render json: {error: "Trip not Found"}, status: 404
        end
    end 


    def update 
        trip = trip_find
        trip.update!(trip_params)
        render json: trip , status: 202
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: 406
    end 

    def create
        trip = Trip.create!(trip_params)
        render json: trip, status: 201
      rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: 406
      end

    def destroy
        trip = trip_find
        if trip.present?
            trip.destroy
            head :no_content
        else 
            render json: {error: "Trip not found"}, status: 404
        end
    end 

    private

    def trip_find
        Trip.find_by(id: params[:id])
    end 

    def trip_params 
        params.permit(:destination, :image, :date_start, :date_end, :user_id)
    end 

    def current_user
        @current_user ||= User.find(session[:user_id])
    end

    def check_owner
        trip = Trip.find_by(id: params[:id])
        if trip.present? && trip.user != current_user
            render json: {error: "Not authorized"}, status: 403
        end
    end
end
