class Api::V1::FoodsController < ApplicationController
  def index
    @foods = Food.all
    render json: @foods
  end

  def create
    @food = Food.find_or_create_by(name: params[:name])
    render json: @food
  end
end
