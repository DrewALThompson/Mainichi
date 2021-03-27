Rails.application.routes.draw do
    root :to => 'users#index'

    resources :users, only: [:index]
    resources :sessions, only: [:index]
    resources :words, only: [:index]
end
