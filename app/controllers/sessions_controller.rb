class SessionsController < ApplicationController
  def sign_in
  end

 def create
   user = User.find_by(user_name: params[:user_name])
   if user && user.authenticate(params[:password])
      respond_to do |format|
        session[:user_id] = user.id
        format.json { render json: { message: "Success"} }
        format.html { redirect_to root_path }
      end
   else
      #  flash[:alert] = "Invalid Username or Password"
      respond_to do |format|
        format.html { render :sign_in }
        format.json { render json: { message: "Failed"} }
      end
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
