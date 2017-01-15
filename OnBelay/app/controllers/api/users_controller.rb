class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User
      .includes(:messages)
      .includes(:responses)
      .includes(:questions)
      .find(params[:id])

    if @user
      render :profile
    else
      render json: @user.errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render :profile
    else
      render json: @user.errors, status: 422
    end
  end

  def index
    @users = current_user.find_users_within(params[:distance])
      .includes(:responses)
      .includes(:questions)
      .where("username != ?", current_user.username)

    if @users
      render :index
    else
      render json: @users.errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user)
      .permit(
        :username,
        :password,
        :discipline,
        :indoorsoutdoors,
        :email,
        :age,
        :location,
        :summary,
        :prof_pic_id,
        :image
      )
  end

end
