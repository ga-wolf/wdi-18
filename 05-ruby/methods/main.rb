# Default parameters
# Implicit return (the last line evaluated will always be given back)

require 'pry'

def hello
  puts "Hello World"
end

hello
hello()

def hello_specific( name )
  puts "Hello #{name}"
end

hello_specific "Roget"
hello_specific( "Geralt" )

def say_hi( name = "World" )
  puts "Hello #{name}!"
end

say_hi
say_hi()
say_hi( "Roget" )
say_hi( "Blade" )

def add_two_numbers( x, y )
  # Implicit return (last line is always given back)
  x + y
end

puts add_two_numbers( 4, 2 )
puts add_two_numbers( 4, 8 )

def greeting( name = "World" )
  # We do have an explicit return
  # return "I am going to ignore everyone today"
  "Hello #{name}"
end

p greeting()
p greeting( "Jane" )
