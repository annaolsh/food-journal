class UserFoodSerializer < ActiveModel::Serializer
  # belongs_to :user
  # belongs_to :food
  attributes :id, :calories, :date, :food_name, :food_id, :user_name, :user_id
  def food_name
    object.food.name
  end
  def user_name
    object.user.name
  end
end
