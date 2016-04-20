class Cheese < ActiveRecord::Base
  belongs_to :user
  has_many :favorites, counter_cache: true

  def fave_count
    favorites.count
  end
end
