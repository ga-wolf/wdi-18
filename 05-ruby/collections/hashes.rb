require 'pry'

# Creation of hashes

empty_hash = {}
groucho = {
  first_name: "Groucho",
  last_name: "Marx"
}
groucho = {
  :first_name => "Groucho",
  :last_name => "Marx"
}
person = {
  :first_name => "Elke",
  :location => "Berkeley"
}
p person[:last_name]
person.default = "That doesn't exist"
p person[:last_name]

serge = {
  :name => "Serge",
  :nationality => "French"
}

# Adding new keys

serge[:occupation] = "Actor || musician || photographer"
serge["counterpart"] = "Jane"

# Removing keys

p serge
serge.delete("counterpart")
p serge

# Iterating through hashes

p serge.keys
p serge.values

puts "Iterate through all of the keys..."
serge.keys.each do |key|
  puts "Key: #{key}"
end

puts "Iterate through all of the values..."
serge.values.each do |val|
  puts "Value: #{val}"
end

serge.each do |key, value|
  puts "Key: #{key}. Value: #{value}."
end

camera = {
  :brand => "Leica",
  :model => "M3",
  :year => 1956,
  :memory_card => "SD"
}
camera.delete( :memory_card )

camera.each do |key, value|
  puts "New key value pair"
  puts "\t #{key} : #{value}"
end




# binding.pry

puts ""
