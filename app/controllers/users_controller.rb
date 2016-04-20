class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @cheeses = @user.favorite_cheeses
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        session[:user_id] = @user.id
        format.json { render :show, status: :created, location: @user }
        format.html { redirect_to root_path }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:user_name, :password, :password_confirmation)
  end
end
