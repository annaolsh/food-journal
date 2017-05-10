class Api::V1::UserFoodsController < ApplicationController
  def index
    @userfoods = UserFood.all
    # render json: @userfoods
    # render json: {userfoods: @userfoods, name: @userfoods.map{ |userfood| userfood.user.name}}
    render json: @userfoods
      ##exclude: [user: [:id]]
      #fields: { user: [:name], food: [:name]}

    

    # render json: @userfoods.to_json(
    #   only: [:id, :calories],
    #   include: [
    #     user: { only: [:name]},
    #     food: { only: [:name]}
    # ])
  end

  render json: @post, include: [:media, author: [:website]],
    fields: { media: [:title], author: { website: [:url] } }

  # def show
  #     @post = Post.find(params[:id])
  #     respond_to do |format|
  #       format.html { render :show }
  #       format.json { render json: @post.to_json(only: [:title, :description, :id], include: [author: { only: [:name]}]) }
  #     end
  #   end




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
