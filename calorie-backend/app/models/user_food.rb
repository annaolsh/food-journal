class UserFood < ApplicationRecord
  has_many :foods
  has_many :users
end
