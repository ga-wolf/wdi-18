# == Route Map
#
#  Prefix Verb URI Pattern        Controller#Action
#    root GET  /                  pages#home
#    home GET  /home(.:format)    pages#home
#   about GET  /about(.:format)   pages#about
# artists GET  /artists(.:format) artists#index
#

Rails.application.routes.draw do

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
