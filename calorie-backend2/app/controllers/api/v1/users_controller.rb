class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    #binding.pry
    @user = User.find_or_create_by(name: params[:username])
    render json: @user
  end

  def show
  #  binding.pry
    @user = User.find(params[:id])
    render json: @user
  end

end
