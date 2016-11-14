require 'pry'
# Gives us access to binding.pry (like debugger in JS)

puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(q) - quit"
  print "Enter your choice: "
  gets().chomp() # Implicit return
end

def add
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  puts "The result is #{first_num + second_num}"
end

def subtract
  print "What is your first number? "
  first_num = gets.to_f
  print "What is your second number? "
  second_num = gets.to_f

  puts "The result is #{first_num - second_num}"
end

user_choice = menu() # Whatever is returned from menu will be saved here

# Keep displaying the menu until the user_choice variable stores the string "q"

until user_choice == "q"
  # puts "\t\tUser choice: #{user_choice}"
  case user_choice
  when "a" then add()
  when "s" then subtract()
  else
    puts "That is not a valid option"
  end

  user_choice = menu()
end

puts ""
puts "Thanks for using our calculator"
