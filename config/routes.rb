Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/groups" => "groups#index"
  namespace :api do
    namespace :v1 do
      get '/categories' => 'categories#index'
      get '/groups' => 'groups#index'
    end
  end
end
