Rails.application.routes.draw do

  root 'pages#index'
  get "/home" => 'pages#index'

end
