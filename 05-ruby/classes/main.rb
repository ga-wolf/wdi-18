require 'pry'

class Person
  attr_accessor :name, :email, :age, :gender
  # def name=( name ) # Setter
  #   @name = name
  # end
  #
  # def name # Getter
  #   @name
  # end

  # def email=( email )
  #   @email = email
  # end
  #
  # def email
  #   @email
  # end

  def speak # instance methods
    @spoken = true
    puts "I am saying hi"
  end

  def laugh # instance methods
    puts "I am laughing out loud"
  end

  def eat
    puts "I am currently eating"
  end
end

class Instrument
  attr_accessor :brand, :model
  # This will define getters and setters for the instance variables brand and model
end

i = Instrument.new
i.brand = "Roli"
i.model = "Seaboard Grand"
p i.brand
p i.model

p1 = Person.new
p1.name=( "Groucho" )

p2 = Person.new
p2.name = "Harpo"

class MarxBrother
  attr_accessor :name, :email

  # This will run as soon as we call MarxBrother.new
  def initialize( name, email )
    # puts "initialize ran"
    @name = name
    @email = email
  end
end

groucho = MarxBrother.new( "Groucho", "groucho@ga.co" )
harpo = MarxBrother.new( "Harpo", "harpo@ga.co" )

class Vehicle
  def move
    puts "I am moving"
  end
  def generic_vehicle_stuff
    puts "I am a generic vehicle"
  end
end

v = Vehicle.new
v.generic_vehicle_stuff()
v.move()

class Boat < Vehicle
  def specific_boat_stuff
    puts "I am a boat"
  end
end

b = Boat.new
b.specific_boat_stuff()
b.move()
b.generic_vehicle_stuff()

# Start with a class of User
  # Getters and setters for name, gender
  # jane = User.new "Jane", "Female"
  # jane.say_hi
    # => "I am Jane, saying hi"
  # serge = User.new "Serge", "Male"
  # serge.say_hi
    # => "I am Serge, saying hi"

# https://gist.github.com/ga-wolf/667aa09c50207e1bc12bc0a065626a19




binding.pry

puts ''
