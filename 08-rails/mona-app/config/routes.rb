# == Route Map
#
#      Prefix Verb   URI Pattern                 Controller#Action
#       works GET    /works(.:format)            works#index
#             POST   /works(.:format)            works#create
#    new_work GET    /works/new(.:format)        works#new
#   edit_work GET    /works/:id/edit(.:format)   works#edit
#        work GET    /works/:id(.:format)        works#show
#             PATCH  /works/:id(.:format)        works#update
#             PUT    /works/:id(.:format)        works#update
#             DELETE /works/:id(.:format)        works#destroy
#        root GET    /                           pages#home
#        home GET    /home(.:format)             pages#home
#       about GET    /about(.:format)            pages#about
# artists_new GET    /artists/new(.:format)      artists#new
#     artists POST   /artists(.:format)          artists#create
#             GET    /artists(.:format)          artists#index
#             GET    /artists/:id(.:format)      artists#show
#             GET    /artists/:id/edit(.:format) artists#edit
#             PUT    /artists/:id(.:format)      artists#update
#             POST   /artists/:id(.:format)      artists#update
#             PATCH  /artists/:id(.:format)      artists#update
#             DELETE /artists/:id(.:format)      artists#destroy
#

Rails.application.routes.draw do
  resources :works # Full set of CRUD urls

  root "pages#home"
  get "/home" => "pages#home"
  get "/about" => "pages#about"

  # Create
  get '/artists/new' => 'artists#new' # Shows the form
  post '/artists' => 'artists#create' # Handling submission of form

  # Read
  get '/artists' => 'artists#index'
  get '/artists/:id' => 'artists#show'

  # Update
  get '/artists/:id/edit' => 'artists#edit' # Shows the form
  put '/artists/:id' => 'artists#update'    # Handling submission of form
  post '/artists/:id' => 'artists#update'   # Handling submission of form
  patch '/artists/:id' => 'artists#update'  # Handling submission of form

  # Delete
  delete "/artists/:id" => 'artists#destroy'

  # REST (Representational State Transfer)
    # GET - asks for information
    # POST - creates new information
    # PUT/PATCH - updates existing information
    # DELETE - deletes information

    # READ
    # GET /artists - artists#index
    # GET /artists/:id - artists#show
    #
    # CREATE
    # GET /artists/new - artists#new
    # POST /artists - artists#create
    #
    # UPDATE
    # GET /artists/:id/edit - artists#edit
    # POST /artists/:id - artists#update
    # PUT /artists/:id - artists#update
    # PATCH /artists/:id - artists#update
    #
    # DELETE
    # DELETE /artists/:id - artists#destroy

end
