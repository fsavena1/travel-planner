class TripsController < ApplicationController

    def index 
        render json: Trip.all, status: 200
    end 
    
    def show 
        trip = Trip.find_by(id: session[:user_id])
        if trip.present?
            render json: trip, status: 200
        else 
            render json: {error: "Not authorized"}, status: 404
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
        trip = User.create!(trip_params)
        render json: trip, status: 201
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: 406
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
end
