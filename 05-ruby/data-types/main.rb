# Printing to the console

puts("Hello World") # Seperate lines
print("Hello World") # Can be on the same line
p("Hello World") # Printing for programmers

# Strings in Ruby

puts "Double quotes" # Have interpolation
puts 'Single quotes' # Don't have interpolation

name = "Gilberto"
puts "Hello " + name # Concatenation approach
puts "Hello #{name}" # Interpolation approach

puts 'Hello #{name}' # That won't work

puts "40 + 2 = #{40 + 2}"

name = "badger"
puts "Hello #{name.capitalize}"

p "Hello".methods.length

# Numbers in Ruby

1 + 2
-1.0 - 3.0
2.4 * 3
21412412512521521 / 12

puts "4 to the power of 8 = #{4 ** 8}" # Exponent operator

# Variables in Ruby
  # Snake-cased, not camel-cased

this_is_ruby = true
this_is_a_string = "Yes, it is"

this_is_a_number = 41
this_is_a_number += 1

p this_is_a_number

empty_arr = []
empty_hash = {}

name = "Wolf"
company_name = "Whiskey Business"

puts "You all can't wait for #{name}'s company #{company_name}"

# Getting user input

print "What is your first name? "
first_name = gets().chomp()
puts "Your first name is #{ first_name }"

print "What is your last name? "
last_name = gets().chomp()
puts "Your last name is #{ last_name }"

full_name = "#{first_name} #{last_name}"
puts full_name
