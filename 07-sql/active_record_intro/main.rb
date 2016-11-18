require 'pry'
require 'sqlite3' # Ruby interface for SQL || adapter
require 'active_record' # Protects us from writing SQL

# What database am I talking to?
# How am I talking to it?

ActiveRecord::Base.establish_connection(
  :database => 'database.db',
  :adapter => 'sqlite3'
)

# Should ActiveRecord show the SQL it is writing?

ActiveRecord::Base.logger = Logger.new( STDERR )

# Define a class or a model (a model is a class that is connected to a database using an ORM)

# I have got a table called users
  # A table must always be snake_cased and pluralized
# I have got to create a model or class called User
  # A model must always be UpperCamelCased and singular

# Inherit all of the functionality from ActiveRecord
  # Connect the class User and the table users
class User < ActiveRecord::Base
end

# Four CRUD Operations

# Create
u1 = User.new
u1.first_name = "Bill"
u1.last_name = "Murray"
u1.username = "billyboy"
u1.description = "billyboy"
u1.save # Create a new record in the users table, and give it an ID because of AUTOINCREMENT in our SQL table

badger = User.create({
  :first_name => "Chris",
  :last_name => "Badger",
  :username => "breakingbadger",
  :description => "An absolute darling"
}) # Automatically creates a record (gets an ID)

# Read

all_users = User.all
first_user = User.first
last_user = User.last

user_with_id_six = User.find( 6 )
django = User.find_by({ :first_name => "Django" })
django = User.find_by :first_name => "Django"

all_bills = User.where :first_name => "Bill"

# Update

jacques = User.find_by :first_name => "Jacques"
jacques.description = "EXPLORER"
jacques.username = "helloworld"
jacques.save

new_user = User.create()
new_user.update({
  :first_name => "TEST",
  :last_name => "TEST",
  :username => "TEST",
  :description => "TEST"
}) # This will call save for us

django = User.find_by :first_name => "Django"
django.update :last_name => "REINHARDT"

# Delete

trump = User.create({
  :first_name => "Donald",
  :last_name => "Trump",
  :username => "trumpet",
  :description => "The world will have hell toupee"
})
trump.destroy

User.destroy_all

puts ""
