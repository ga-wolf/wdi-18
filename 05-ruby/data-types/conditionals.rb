# Basic if statement

number = 12

if number > 13
  puts "That is a bigger number"
end

# If/elsif statement

name = "Groucho"
if name == "Harpo"
  puts "Your name is Harpo"
elsif name == "Chico"
  puts "Your name is Chico"
else
  puts "Hopefully you are Groucho"
end

puts("42 is larger") if 42 > 10 # Inline conditionals

comfortable = false
puts "I must be wearing double linen" if comfortable

if name != "Groucho"
  puts "That is a shame"
end

x = 5
unless x > 2
  puts "Smaller than 2 (or equal)"
else
  puts "Larger than 2"
end

name = "Badger"
puts "Up the front of the class now" unless name == "Badger"


hour = 10
case
when hour < 12
  puts "Good morning"
when hour > 12 && hour < 17
  puts "Good afternoon"
else
  puts "Good evening"
end

name = "Harpo"

case name
when "Groucho" then puts "You are Groucho"
when "Harpo" then puts "You are Harpo"
when "Zeppo" then puts "You are Zeppo"
end

name = "Badger"

role = case name
       when "Badger" then "Developer in residence"
       when "Wolf" then "Teacher (apparently)"
       else
         "Student"
       end

puts role

puts true && true

puts ( 42 > 13 && 50 < 60 )

puts ( 42 < 13 || true )

puts !false
