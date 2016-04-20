class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def show
  end

  def favorite
    if signed_in?
      @fave = current_user.favorites.build(cheese_id: params[:id])
      @fave.save
      redirect_to root_path
    end
  end
end
