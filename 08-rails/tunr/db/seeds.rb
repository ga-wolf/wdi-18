puts "USERS!"
User.destroy_all

u1 = User.create :name => 'Craigsy', :email => 'craigsy@ga.co'
u2 = User.create :name => 'Jane', :email => 'jane@ga.co'
u3 = User.create :name => 'Elke', :email => 'elke@ga.co', :admin => true
u4 = User.create :name => 'Hayley', :email => 'hayley@ga.co'

puts "\tUser count: #{ User.all.count }"

puts "\nMIXTAPES!"
Mixtape.destroy_all

m1 = Mixtape.create :name => 'Fire'
m2 = Mixtape.create :name => 'Easter jams'
m3 = Mixtape.create :name => 'BE$T Taylor $wizzle MIX 5EVA'
m4 = Mixtape.create :name => 'Hip hip array!'

puts "\tMixtape count: #{ Mixtape.all.count }"

u1.mixtapes << m1
u2.mixtapes << m2
u4.mixtapes << m3 << m4

puts "\nUSER HAS_MANY MIXTAPES"
puts "MIXTAPE BELONGS_TO USER"

puts "\tUser one mixtape count: #{ u1.mixtapes.count }"

puts "\tHayley's Mixes"
u4.mixtapes.each do |mix|
  puts "\t\tMixtape name: #{ mix.name }"
end

puts "\tFirst mixtape user name: #{ m1.user.name }"
puts "\tSecond mixtape user name: #{ m2.user.name }"
puts "\tThird mixtape user name: #{ m3.user.name }"
puts "\tFourth mixtape user name: #{ m4.user.name }"

puts "\nALBUMS!"
Album.destroy_all

a1 = Album.create :name => 'All by electricity'
a2 = Album.create :name => 'From the vapors to the gasoline'
a3 = Album.create :name => 'Systems/Layers'

puts "\tAlbum count: #{ Album.all.count }"

puts "\nSONGS!"
Song.destroy_all

s1 = Song.create :name => 'All by electricity', :album_id => a1.id
s2 = Song.create :name => 'Marianas Trench'
s3 = Song.create :name => 'Have a safe trip, dear'

puts "\nALBUM HAS_MANY SONGS"
puts "SONG BELONGS_TO ALBUM"
a2.songs << s2
a3.songs << s3

puts "\tSong count on the first album: #{ a1.songs.count }"
puts "\tSong count on the second album: #{ a2.songs.count }"
puts "\tSong count on the third album: #{ a3.songs.count }"

puts "\tAlbum name for the first song: #{ s1.album.name }"
puts "\tAlbum name for the second song: #{ s2.album.name }"
puts "\tAlbum name for the third song: #{ s3.album.name }"

# (1..100).to_a.each do |num|
#   Song.create( :name => "Song #{num}" )
# end

puts "\tSong count: #{ Song.all.length }"

puts "\nARTISTS!"
Artist.destroy_all

r1 = Artist.create :name => 'June of 44'
r2 = Artist.create :name => 'The Mercury Program'
r3 = Artist.create :name => 'Rachels'

puts "\tArtist count: #{ Artist.all.length }"

r1.songs << s1
r2.songs << s2
r3.songs << s3

puts "\nARTIST HAS_MANY SONGS"
puts "SONG BELONGS_TO ARTIST"

puts "\tFirst artist song count: #{ r1.songs.count }"
puts "\tSecond artist song count: #{ r2.songs.count }"
puts "\tThird artist song count: #{ r3.songs.count }"

puts "\tFirst song artist name: #{ s1.artist.name }"
puts "\tSecond song artist name: #{ s2.artist.name }"
puts "\tThird song artist name: #{ s3.artist.name }"
