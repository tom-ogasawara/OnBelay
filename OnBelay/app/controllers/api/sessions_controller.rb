class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render 'api/users/show', status: 200
    else
      render json: { base: ["Invalid Username or Password."] }, status: 422
    end
  end

  def destroy
    if current_user
      log_out
      render json: {}, status: 200
    else
      render json: {}, status: 404
    end
  end

end
