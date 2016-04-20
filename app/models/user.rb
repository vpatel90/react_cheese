class User < ActiveRecord::Base
  has_many :cheeses
  has_many :favorites
  has_many :favorite_cheeses, through: :favorites, source: :cheese


  has_secure_password

  validates :user_name, uniqueness: { case_sensitive: false }

  def contributed
    cheeses.count
  end

  def favorites_count
    favorites.count
  end
end
