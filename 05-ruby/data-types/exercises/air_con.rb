# 2. Air Conditioning
#

puts "What is the current temperature?"
current_temp = gets.to_i

puts "Is the air conditioner working? (Y/N)"
aircon_status = gets.chomp

puts "What temperature do you want it to be?"
desired_temp = gets.to_i

# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

if aircon_status === "Y" && current_temp > desired_temp
  puts "Turn on the A/C please."
elsif aircon_status === "N" && current_temp > desired_temp
  puts "Fix the A/C now! It's hot!"
elsif aircon_status === "N" && current_temp < desired_temp
  puts "Fix the A/C Whenever. It's cool."
else
  puts "Everything's fine."
end
