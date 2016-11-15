require 'pry'

# Array and Hash access

# A. Given the following data structure:
#
a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
p a[1]

# How would you add your name to the array?

a.push("Badger")

p a
# B. Given the following data structure:
#
h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2
}

# How would you return the string "One"?
p h[1]
# How would you return the string "Two"?

p h[:two]
# How would you return the number 2?

p h["two"]

# How would you add {3 => "Three"} to the hash?
h[3] = "Three"

p h

# How would you add {:four => 4} to the hash?
h[:four] = 4

p h
# C. Given the following data structure:
#
is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
p is[2 + 2 == 4]

# What is the return value of is["Erik" == "Jonathan"]?
p is["Erik" == "Jonathan"]

# What is the return value of is[9 > 10]?
p is[9 > 10]

# What is the return value of is[0]?
p is[0]

# What is the return value of is["Erik"]?
p is["Erik"]
# D. Given the following data structure:

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?

p users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)
p users

# How would you add yourself to the users hash?
users["Badger"] = {
  :twitter => "cj_barnaby",
  :favorite_numbers => [42, 42, 42]
}

p users

# How would you return the array of Erik's favorite numbers?
erik_numbers = users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
p erik_numbers.min

# How would you return an array of Anil's favorite numbers that are also even?
anil_numbers = users["Anil"][:favorite_numbers]

anil_even = anil_numbers.select do |el|
  el.even?
end

p anil_even

# How would you return an array of the favorite numbers common to all users?
jonathan_numbers = users["Jonathan"][:favorite_numbers]

p erik_numbers & jonathan_numbers & anil_numbers

# binding.pry
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

favorites = []

all_favorites = jonathan_numbers | anil_numbers | erik_numbers

all_favorites.sort!
