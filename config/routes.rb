Rails.application.routes.draw do
  devise_for :users
  root 'tops#index'
  resources :users, only: [:show, :edit, :update]
  resources :appeals, only: [:index, :show, :new, :create, :edit, :update]
  resources :groups, only: [:create] do
    collection do
      get 'log'
    end
    resources :messages, only: [:index, :create]
  end
end

