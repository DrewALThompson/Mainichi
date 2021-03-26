Rails.application.routes.draw do
    root :to => 'users#index'

    resources :users, only: [:create]
    resources :sessions, only: [:create]
end
