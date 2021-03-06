Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :foods, only: [:index, :create, :show]
      resources :users, only: [:index, :show, :create]
      resources :user_foods, only: [:index, :show, :create]
    end
  end
end
