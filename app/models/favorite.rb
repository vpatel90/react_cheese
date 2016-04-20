class Favorite < ActiveRecord::Base
  belongs_to :user
  belongs_to :cheese, counter_cache: true
end
