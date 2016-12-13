Rails.application.routes.draw do
  root 'secrets#home'
  get "/app" => 'secrets#home'
  resources :secrets
end
