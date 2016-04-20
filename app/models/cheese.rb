class Cheese < ActiveRecord::Base
  belongs_to :user
  has_many :favorites
  has_many :favorite_users, through: :favorites, source: :user



  validates :name, uniqueness: { case_sensitive: false }

  def fave_count
    favorites.count
  end
end
