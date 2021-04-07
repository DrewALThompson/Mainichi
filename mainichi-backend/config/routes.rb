Rails.application.routes.draw do

    resources :users, only: [:create]
    resources :sessions, only: [:create]
    resources :words, only: [:index]
    get "*any", to: redirect('/')
end
