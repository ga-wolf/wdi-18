require 'pry'
require 'sinatra'
require 'sinatra/reloader'

# Literal route
  # HTTP verb with an exact path
    # localhost:4567
    # localhost:4567/
  # The empty slash is commonly called the root path or the home page

get "/" do
  erb :home
  # Go into the views folder, get the home.erb folder
  # Evaluate if there is any dynamic ruby stuff
  # Place it where the yield statement is in the views/layout.erb
end

get "/about" do # localhost:4567/about
  erb :about
end

get "/contact" do # localhost:4567/contact
  erb( :contact ) # go get views/contact.erb
end

# Dynamic Route
  # HTTP Verb paired with a pattern matcher

  # localhost:4567/multiply/4/5
    # params = { "x" => "4", "y" => "5" }
  # localhost:4567/multiply/2009/128048102
    # params = { "x" => 2009, "y" => "128048102" }

get "/multiply/:x/:y" do
  x = params["x"].to_f
  y = params["y"].to_f
  res = x * y

  "#{x} * #{y} = #{res}"
end

# Dynamic route
  # localhost:4567/divide/10/20
  # localhost:4567/divide/124.1251/240210.1245

get "/divide/:first/:second" do
  x = params[:first].to_f
  y = params[:second].to_f

  "#{x} / #{y} = #{x / y}"
end

get "/users" do
  @first_user = "Larry"
  @second_user = "Barry"
  @third_user = "Garry"
  @users = ["Larry", "Garry", "Barry"]

  erb :users_index
end

get "/users/:username" do
  @name = params["username"]
  erb :users_show
end

get "/auto/:color" do
  @color = params["color"]
  # I need to define a special variable here (put an @ on it!)
  # I need to represent that variable in the corresponding view
    # My car is red
    # My car is rebeccapurple
      # Span tag with an attribute?
  erb :car_color
end

# To get information using a form
  # Display the form on one page
    # Form needs to have a method and an action
    # All inputs need to have a name attribute
  # Display the results on a second page

get "/calculate" do
  erb :calculate
end

get "/results" do
  @first_num = params["first_num"].to_f
  @second_num = params["second_num"].to_f

  erb :results
end
