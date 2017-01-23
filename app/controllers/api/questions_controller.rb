class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.includes(:answers)

    if @questions
      render :index
    else
      render json: []
    end
  end

  def show
    @question = Question.find(params[:id])

    if @question
      render :show
    else
      render json: []
    end
  end

end
