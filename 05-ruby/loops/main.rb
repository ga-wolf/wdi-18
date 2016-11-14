# Loops
  # Starting point
  # End condition
  # Increment

# while true
#   puts "This is not a great idea"
# end

# i = 0
# while i <= 5
#   puts "I: #{i}"
#   i += 1
# end
#
# i = 5
# while i >= 1
#   puts "I: #{i}"
#   i -= 1
# end
# puts "Blast off!"

# i = 0
# until i == 5
#   puts "I: #{i} (until), "
#   i += 1
# end

# Iterators

# 10.times do
#   puts "It happened"
# end

# 10.times do |increment|
#   puts "It happened: #{increment}"
# end

# 10.downto(5) do |i|
#   puts "I: #{i}"
# end
#
# 20.upto(25) do |i|
#   puts "I: #{i}"
# end

# for i in 0..5
#   puts "I: #{i}"
# end

puts Random.rand() # 0 and 1
puts Random.rand( 10 ) # Integer between 0 and 10
puts Random.rand( 10.0 ) # Float between 0.0 and 10.0
puts Random.rand( 5..10 ) # Number between 5 and 10 (inclusive)
puts Random.rand( 5...10 ) # Number between 5 and 10 (exclusive)
