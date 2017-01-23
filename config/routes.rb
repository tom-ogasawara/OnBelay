Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :index]
    resources :likes, only: [:index, :create, :destroy]
    resources :questions, only: [:index, :show]
    resources :responses, only: [:create, :show, :index, :update, :destroy]
    resources :conversations, only: [:create, :show, :index] do
      resources :messages, only: [:create, :show]
    end
    resource :session, only: [:create, :destroy]
  end
end
