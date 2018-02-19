Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :mangas, only: [:show, :index]
    resources :chapters, only: [:show]
    get '/page/:id', to: "mangas#page"
  end

  root "static_pages#root"
end
