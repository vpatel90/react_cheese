class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all.order(favorites_count: :desc)
  end

  def create
    @cheese = current_user.cheeses.build(cheese_params)
    respond_to do |format|
      if @cheese.save
        format.json { render json: @cheese }
        format.html { redirect_to root_path }
      else
        format.html { render :new }
        format.json { render json: @cheese.errors, status: :unprocessable_entity }
      end
    end
  end

  def show
    @cheese = Cheese.find(params[:id])
    @users = @cheese.favorite_users
  end

  def favorite
    if signed_in?
      @fave = current_user.favorites.build(cheese_id: params[:id])
      @fave.save
      @cheese = Cheese.find(params[:id])
      respond_to do |format|
        format.json { render json: @cheese }
        format.html { redirect_to root_path }
      end
    end
  end

  private
  def cheese_params
    params.require(:cheese).permit(:name, :description)
  end
end
