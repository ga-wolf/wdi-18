Rails.application.routes.draw do
  get "/app" => 'posts#app'
  resources :posts
end
