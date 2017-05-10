class FoodSerializer < ActiveModel::Serializer
  has_many :user_foods
  attributes :id, :name
end
