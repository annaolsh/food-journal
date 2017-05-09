require "pry"
class Api::V1::JournalsController < ApplicationController
  def index
    @journals = Journal.all
    render json: @journals
  end

  def create

    @journal = Journal.new(
      food_name: params[:food_name],
      cuisine: params[:cuisine],
      calories: params[:calories],
      date: params[:date],
      user_id: params[:user_id])

    if @journal.valid?
      @journal.save
      render json: @journal
    end
  end

  def show
    @journal = Journal.find(params[:id])
    render json: @journal
  end
end
