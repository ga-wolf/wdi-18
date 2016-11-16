require 'pry'
require 'sinatra'
require 'sinatra/reloader'
# Include all of Sinatra in this Ruby file
  # This makes our file a server

# Literal routing
  # HTTP Method (Verb) - GET
  # Path (thing after the domain and port, before the question mark or the hash sign)

get "/" do
  "This is our home page - the root path /"
end

get "/helloworld" do
  "Hello World"
end

get "/hi" do
  "Hi"
end

get "/hi/Groucho" do
  "Hi Groucho"
end

get "/hi/Harpo" do
  "Hi Harpo"
end

get "/hi/Zeppo" do
  "Hi Zeppo"
end

get "/test" do
  "This is the /test path"
end

get "/addTwoNumbers" do
  first_num = Random.rand( 10 )
  second_num = Random.rand( 10 )
  result = first_num + second_num
  "#{first_num} + #{second_num} = #{result}"
end

# Dynamic Routing
  # HTTP Method or Verb
  # URL Matching Pattern
    # It needs to look something like /hello/___
      # localhost:4567/hello/Groucho
      # localhost:4567/hello/Harpo
      # localhost:4567/hello/Zeppo

get "/hello/:name" do
  bro = params["name"]
  "Dynamic route - #{bro} - /hello/:name "
end

# Path: /add/5/10
# Response: The result was 15

# Path: /add/3/8
# Response: The result was 11


get "/add/:x/:y" do
  x = params["x"].to_i
  y = params["y"].to_i
  "The result was #{x + y}"
end

# /minus/____/____
get "/minus/:first_num/:second_num" do
  x = params["first_num"].to_i
  y = params["second_num"].to_i
  "The result was #{x - y}"
end

get "/color/:c" do
  color = params[:c]
  "<h1 style='color: #{color}'>Hello World</h1>"
end
