require 'pry'

letters = [ "a", "b", "c", "d", "e" ]

letters.each do |letter|
  p letter
end
#
# # [ 1, 2, 3, 4, 5 ].each do |num|
# #   p num
# # end
#
# [ 1, 2, 3, 4, 5 ].each { |num| p num }
#
# blog_posts = [ "Blog Post 1", "Blog Post 2", "Blog Post 3" ]
#
# blog_posts.reverse_each do |post|
#   p post
# end
# # blog_posts.reverse_each { |post| p post }
#
# alphabet = ('a'..'z').to_a
#
# index = 0
# while index < alphabet.length
#   p alphabet[ index ]
#   index += 5
# end

numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

# Create a new array called multiplied_by_five
  # This should be created by multiplying every number in numbers by five

multiplied_by_five = numbers.map do |num|
  num * 5
end
p multiplied_by_five

# I want to change the numbers variable
  # Update every number in there by multiplying it by ten

numbers.map! do |n|
  n * 10
end
p numbers

marx_brothers = [ "harpo", "gummo", "zeppo", "groucho" ]

marx_brothers.map! do |bro|
  bro.capitalize
end

p marx_brothers

numbers = (1..12).to_a

even_numbers = numbers.select do |num|
  # num % 2 == 0
  num.even?
end

p even_numbers
p numbers

blog_posts = [ "blog post 1", "BLOG POST 2", "blog post 3" ]
# I want to create a new variable called upcased_posts
  # That should be created by rejecting any title that isn't completely capitalized

upcased_posts = blog_posts.select do |title|
  title == title.upcase
end
p upcased_posts

arr_one = ('x'..'z').to_a
arr_two = ('w'..'y').to_a

# Addition operator (concatenation)
p arr_one + arr_two

# Union operator (combines the two arrays but removes duplicates)
p arr_one | arr_two

# Intersection operator (only gives back what is in both arrays)
p arr_one & arr_two

# Difference operator (what is only in the first array)
p arr_one - arr_two



binding.pry

puts ""
