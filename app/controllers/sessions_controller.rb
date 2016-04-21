class SessionsController < ApplicationController
  def sign_in
  end

 def create
   user = User.find_by(user_name: params[:user_name])

   if user && user.authenticate(params[:password])
     session[:user_id] = user.id
     redirect_to root_path
   else
     flash[:alert] = "Invalid Username or Password"
     render :sign_in
   end
 end

 def destroy
   session[:user_id] = nil
   flash[:notice] = "Goodbye!"
   redirect_to root_path
 end

 def sign_out
 end

end
