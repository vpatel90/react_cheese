class User < ActiveRecord::Base
  has_many :cheeses
  has_many :favorites
  has_many :favorite_cheeses, through: :favorites, source: :cheese


  has_secure_password
end
