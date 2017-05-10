class UserSerializer < ActiveModel::Serializer
  has_many :user_foods
  # has_many :foods, through: :user_foods
  attributes :id, :name
end
