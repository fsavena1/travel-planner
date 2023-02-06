class MemoriesController < ApplicationController

    # def index 
    #     render json: Memory.all, status: 200
    # end 
    
    # def show 
    #     memory = Memory.find_by(id: session[:user_id])
    #     if memory.present?
    #         render json: memory, status: 200
    #     else 
    #         render json: {error: "Not authorized"}, status: 404
    #     end
    # end 


    # def update 
    #     memory =  memory_find
    #     memory.update!(memory_params)
    #     render json: memory , status: 202
    # rescue ActiveRecord::RecordInvalid => e 
    #     render json: {errors: e.record.errors.full_messages}, status: 406
    # end 

    # def create
    #     memory = Memory.create!(memory_params)
    #     render json: memory, status: 201
    # rescue ActiveRecord::RecordInvalid => e 
    #     render json: {errors: e.record.errors.full_messages}, status: 406
    # end 

    # def destroy
    #     memory = memory_find
    #     if memory.present?
    #         memory.destroy
    #         head :no_content
    #     else 
    #         render json: {error: "Memory not found"}, status: 404
    #     end
    # end 

    # private

    # def memory_find
    #     Memory.find_by(id: params[:id])
    # end 

    # def memory_params
    #     params.permit(:image, :caption, :user_id, :activity_id)
       
    # end 
end
