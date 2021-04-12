Rails.application.routes.draw do

    resources :users, only: [:create]
    resources :sessions, only: [:create]
    resources :words, only: [:index]
    resources :userwords, only: [:create]
    get "*any", to: redirect('/')
end
