# 1. Drinking age?
#
# Ask the user for their age.
puts "What's your age"
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
age = gets.to_i

if age < 18
  puts "get lost, buddy."
else
  puts "let's get messy."
end
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.
