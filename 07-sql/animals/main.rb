require 'pry' # Debugging
require 'sinatra' # Server
require 'sinatra/reloader' # Live updating server
require 'sqlite3' # Ruby interface to SQLite3

get "/" do
  erb :home
end

get "/about" do
  erb :about
end

# localhost:4567/animals
get "/animals" do
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  @all_animals = db.execute "SELECT * FROM animals"

  db.close

  erb :animals_index
end

get "/animals/new" do
  erb :animals_new
end

post "/animals" do
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  sql = "INSERT INTO animals (species, image, description) VALUES ('#{params["species"]}', '#{params["image"]}', '#{params["description"]}')"
  db.execute sql

  db.close

  redirect "/animals"
end

# /animals/1
# /animals/4
get "/animals/:id" do
  @id = params["id"]

  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  # SELECT * FROM animals WHERE id == 2;
  sql = "SELECT * FROM animals WHERE id == #{@id}"
  puts sql

  @animal = db.execute( sql ).first

  db.close

  erb :animals_show
end

get "/animals/:id/delete" do
  @id = params["id"]

  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  # DELETE FROM animals WHERE id == ____
  sql = "DELETE FROM animals WHERE id == #{@id}"
  db.execute sql
  db.close

  redirect "/animals"
end

get "/animals/:id/edit" do
  @id = params["id"]
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true
  sql = "SELECT * FROM animals WHERE id == #{@id}"
  @animal = db.execute( sql ).first
  db.close

  erb :animals_edit
end

post "/animals/:id" do
  @id = params["id"]
  db = SQLite3::Database.new( "database.db" )
  db.results_as_hash = true

  # UPDATE animals SET species = "V", description = "V", image = "V" WHERE id == 2 OR true == true;
  sql = "UPDATE animals SET species = '#{params['species']}', description = '#{params['description']}', image = '#{params['image']}' WHERE id == #{@id}"
  db.execute sql

  db.close

  redirect "/animals/#{@id}"
end
