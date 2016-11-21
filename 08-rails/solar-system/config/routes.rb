Rails.application.routes.draw do
  root "pages#home"

  get "/home" => "pages#home"

  get "/planets" => "planets#index"

  get "/planets/new" => "planets#new"
  post "/planets" => "planets#create"

  get "/planets/:id" => "planets#show"

  get "/planets/:id/edit" => "planets#edit"
  post "/planets/:id" => "planets#update"

  delete "/planets/:id/delete" => "planets#destroy"
end
