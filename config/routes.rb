Rails.application.routes.draw do
  resources :apartments
  get 'home/index'
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
