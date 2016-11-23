Song.destroy_all

s1 = Song.create :name => 'All by electricity'
s2 = Song.create :name => 'Marianas Trench'
s3 = Song.create :name => 'Have a safe trip, dear'

# (1..100).to_a.each do |num|
#   Song.create( :name => "Song #{num}" )
# end

puts "Song count: #{ Song.all.length }"
