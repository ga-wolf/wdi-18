class SessionController < ApplicationController

  def new
  end

  def create
    user = User.find_by :email => params[:email]

    if user.present? && user.authenticate( params[:password] )
      flash[:success] = "You successfully logged in"
      session[:user_id] = user.id

      redirect_to users_path
    else
      flash[:error] = "The password or email was incorrect"
      render :new
    end
    # We need to find the right user (typically using params[:email])
      # We also need to make sure that that user exists
    # We need to make sure that the password is correct for that user (.authenticate - given us to bcrypt)
    # We need to show some HTML based on whether they were able to log in or not
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path()
  end

end
