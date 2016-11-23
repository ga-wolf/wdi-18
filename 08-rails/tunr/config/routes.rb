# == Route Map
#
# Prefix Verb URI Pattern     Controller#Action
#   root GET  /               pages#home
#   home GET  /home(.:format) pages#home
#

Rails.application.routes.draw do
  
  root 'pages#home'
  get '/home' => 'pages#home'

end
