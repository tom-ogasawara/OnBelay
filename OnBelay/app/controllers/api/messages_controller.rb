class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    @message.author_id = current_user.id if logged_in?
    @conversation = @message.conversation

    if @message.save
      render :show
    else
      render json: @message.errors, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :thread_id)
  end

end
