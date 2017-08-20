Rails.application.routes.draw do
  devise_for :users
  root 'tops#index'
  resources :user, only: [:show]
  resources :groups, only: [:index, :new, :create]

end

