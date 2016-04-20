class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all.order(favorites_count: :desc)
  end

  def show
    @cheese = Cheese.find(params[:id])
    @users = @cheese.favorite_users
  end

  def favorite
    if signed_in?
      @fave = current_user.favorites.build(cheese_id: params[:id])
      @fave.save
      redirect_to root_path
    end
  end
end
