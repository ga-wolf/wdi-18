print "What is the maximum for the game?"

max = gets().to_i()

comp_number = Random.rand( max )

print "What is your guess? "
user_guess = gets().to_i()

# I want to keep asking the user for input until the user_guess is the same as comp_number
while user_guess != comp_number
  if user_guess < comp_number
    puts "Wrong. Guess higher."
  else
    puts "Wrong. Guess lower."
  end
  user_guess = gets().to_i()
end

puts "Congratulations. #{comp_number} was the number."
