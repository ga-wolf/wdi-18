require 'pry'

# Creation of arrays

empty_arr = []
marx_brothers = [ "Groucho", "Harpo", "Zeppo" ]
random_arr = [ true, nil, "", 1.0 ]

new_arr = Array.new( 5 ) # each element defaults to nil
five_strings = Array.new( 5, "" ) # each element is ""
tic_tac_toe = Array.new( 3 ) { Array.new( 3, "" ) }

# Accessing elements in arrays
p marx_brothers[0]
p marx_brothers[2]

p marx_brothers.first
p marx_brothers.last

first_ten_numbers = (1..10).to_a
alphabet = ('a'..'z').to_a

p alphabet[0]
p alphabet.first

p alphabet.last
p alphabet[ alphabet.length - 1 ]
p alphabet[-1]

p alphabet[-3]

# Two parameters to array notation
  # First parameter is the starting index
  # Second parameter is how many elements to take

p alphabet[ 2, 3 ] # [ 'c', 'd', 'e' ]
p alphabet[ 10, 4 ]

# When you provide a range, provide a starting index and an ending index

p alphabet[ 20..24 ]
p alphabet[ 1..5 ]

# The take method will get the first x amount of elements

p alphabet.take( 3 )
p alphabet.take( 5 )

# The drop method drops the first x amount of elements

p alphabet.drop(5)
p alphabet.drop(21)

# Adding elements

arr = [ "b", "c" ]

# Adding to the end
arr.push "d"
arr << "f"

# Adding to the start
arr.unshift "a"

# Adding anywhere
  # insert method takes a desired index and a value
  # (everything else will be moved back)
arr.insert( 4, "e" )

# Deleting elements

numbers = (1..10).to_a
# Remove the last element
numbers.pop()
# Remove the first element
numbers.shift()
# Remove an element at a given index
  # In this case, remove the element at index 3 and move all later elements forward
numbers.delete_at( 3 )
p numbers

# Removing elements

arr = [ 'foo', 0, nil, 'bar', 7, 'baz', 'baz', nil, false ]
numbers = [ 1, 1, 1, 5, 12, 13, 5, 42, 42, 39 ]

p arr.compact # remove all nils
p arr.delete( nil )
p arr.delete( 'foo' )
p arr.delete( 'baz' )
p numbers.uniq # Only the first occurences of each value

# Info about arrays

p alphabet.length
p alphabet.count
p alphabet.size
p alphabet.include?( "a" )
p alphabet.include?( "Z" )

# binding.pry # similar to debugger in JS
