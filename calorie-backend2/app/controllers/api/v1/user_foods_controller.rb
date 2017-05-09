class Api::V1::UserFoodsController < ApplicationController
  def index
    @userfoods = UserFood.all
    render json: @userfoods
  end

  def create
    @userfood = UserFood.new(
      food_id: params[:food_id],
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
