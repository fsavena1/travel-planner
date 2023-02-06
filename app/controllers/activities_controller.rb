class ActivitiesController < ApplicationController

    # def index 
    #     render json: Activity.all, status: 200
    # end 
    
    # def show 
    #     activity = Activity.find_by(id: session[:user_id])
    #     if activity.present?
    #         render json: activity, status: 200
    #     else 
    #         render json: {error: "Not authorized"}, status: 404
    #     end
    # end 

    # def update 
    #     activity = activity_find
    #     activity.update!(activity_params )
    #     render json: activity , status: 202
    # rescue ActiveRecord::RecordInvalid => e 
    #     render json: {errors: e.record.errors.full_messages}, status: 406
    # end 

    # def create
    #     activity = Activity.create!(activity_params)
    #     render json: activity, status: 201
    # rescue ActiveRecord::RecordInvalid => e 
    #     render json: {errors: e.record.errors.full_messages}, status: 406
    # end 

    # def destroy
    #     activity = activity_params
    #     if activity.present?
    #         activity.destroy
    #         head :no_content
    #     else 
    #         render json: {error: "Activity not found"}, status: 404
    #     end
    # end 

    # private

    # def activity_find
    #     Activity.find_by(id: params[:id])
    # end 

    # def activity_params 
    #     params.permit(:name, :description, :link, :date, :user_id, :trip_id)
    # end 
end
