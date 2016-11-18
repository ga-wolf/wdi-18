require 'pry' # Debugging
require 'sinatra' # Server
require 'sinatra/reloader' # Live updating server
require 'sqlite3' # Ruby interface to SQLite3
require 'active_record'

ActiveRecord::Base.establish_connection(
  :database => 'database.db',
  :adapter => 'sqlite3'
)
ActiveRecord::Base.logger = Logger.new( STDERR )

# We have a table called animals
# We need a class called Animal
class Animal < ActiveRecord::Base
end
# Now the class (model) Animal can talk to the database

after do
  ActiveRecord::Base.connection.close
  # This will run after every route handler (whether it is a GET, POST, etc.)
    # The same as our db.close
end

get "/" do
  erb :home
end

get "/about" do
  erb :about
end

# localhost:4567/animals
  # Index path should show all animals in our system
get "/animals" do
  @all_animals = Animal.all
  erb :animals_index
end

get "/animals/new" do
  erb :animals_new
end

post "/animals" do
  # animal = Animal.new
  # animal.species = params["species"]
  # animal.image = params["image"]
  # animal.description = params["description"]
  # animal.save
  Animal.create({
    :species => params["species"],
    :image => params["image"],
    :description => params["description"]
  })
  redirect "/animals"
end

# /animals/1
# /animals/4
# /animals/:id is the SHOW page
  # Should access only one record
get "/animals/:id" do
  # @animal = Animal.find params["id"]
  @animal = Animal.find_by :id => params["id"]
  erb :animals_show
end

get "/animals/:id/delete" do
  animal = Animal.find_by :id => params["id"]
  animal.destroy

  redirect "/animals"
end

get "/animals/:id/edit" do
  @animal = Animal.find params["id"]
  erb :animals_edit
end

post "/animals/:id" do
  animal = Animal.find_by :id => params["id"]
  animal.update({
    :species => params["species"],
    :image => params["image"],
    :description => params["description"]
  })

  redirect "/animals/#{params["id"]}"
end
