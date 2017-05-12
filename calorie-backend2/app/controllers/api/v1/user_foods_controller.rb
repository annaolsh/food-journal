class Api::V1::UserFoodsController < ApplicationController
  def index
    @userfoods = UserFood.all
    render json: @userfoods
  end


  def create
    @user = User.find(params[:user_id])

    @userNewFood = @user.foods.find_or_create_by(name: params[:userfoods])

    @userfood = UserFood.new(
      food_id: @userNewFood.id,
      user_id: params[:user_id],
      calories: params[:calories],
      date: params[:date]
    )
    
    if @userfood.valid?
      @userfood.save
      render json: @userfood
    end
  end

  def show
    @userfood = UserFood.find(params[:id])
    render json: @userfood
  end
end
