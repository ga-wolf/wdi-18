puts "USERS!"
User.destroy_all

u1 = User.create :name => 'Craigsy', :email => 'craigsy@ga.co', :password => "chicken", :password_confirmation => "chicken"
u2 = User.create :name => 'Jane', :email => 'jane@ga.co', :password => "chicken", :password_confirmation => "chicken"
u3 = User.create :name => 'Elke', :email => 'elke@ga.co', :admin => true, :password => "chicken", :password_confirmation => "chicken"
u4 = User.create :name => 'Hayley', :email => 'hayley@ga.co', :password => "chicken", :password_confirmation => "chicken"

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

puts "\nGENRES!"

Genre.destroy_all

g1 = Genre.create :name => "Nautical text rock"
g2 = Genre.create :name => "Chamber pop"
g3 = Genre.create :name => "Algorave"

puts "\tGenre count: #{ Genre.all.count }"

puts "\nGENRE HAS_AND_BELONGS_TO_MANY SONGS"
puts "SONG HAS_AND_BELONGS_TO_MANY GENRES"

g1.songs << s1 << s2 << s3
g2.songs << s2 << s3
g3.songs << s1 << s3

puts "\tGenre one song count: #{ g1.songs.count }"
puts "\tGenre two song count: #{ g2.songs.count }"
puts "\tGenre three song count: #{ g3.songs.count }"

puts "\tSong one genre count: #{ s1.genres.count }"
puts "\tSong two genre count: #{ s2.genres.count }"
puts "\tSong three genre count: #{ s3.genres.count }"

# Print out all of the genre names for s3
puts "\tThird song genre names:"
s3.genres.each do |genre|
  puts "\t\t#{ genre.name }"
end

puts "\nSONG HAS_AND_BELONGS_TO_MANY MIXTAPES"
puts "MIXTAPE HAS_AND_BELONGS_TO_MANY SONGS"

m1.songs << s1 << s2 << s3
m2.songs << s2 << s3
m3.songs << s1 << s2

puts "\tMixtape one song count: #{ m1.songs.count }"
puts "\tMixtape two song count: #{ m2.songs.count }"
puts "\tMixtape three song count: #{ m3.songs.count }"

puts "\tMixtapes that include song one: #{ s1.mixtapes.count }"
puts "\tMixtapes that include song two: #{ s2.mixtapes.count }"
puts "\tMixtapes that include song three: #{ s3.mixtapes.count }"

puts "\nARTIST HAS_MANY GENRES THROUGH SONGS"

puts "\tGenre count for first artist: #{ r1.genres.count }"

puts "\nALBUM HAS_MANY ARTISTS THROUGH SONGS"

puts "\tArtist one for album one: #{ a1.artists.first.name }"

# has many and belongs to
#   Where does the foreign key belong?
#   Add column to that table
#     Artist has many songs
#     Song belongs to artist
#     artist_id on the songs table
#   Tell ActiveRecord about it
#     a.songs
#     s.artist
#
# has_and_belongs_to_many
#   We need to create a new table for this one
#     Filled with foreign keys ( no primary key )
#     table names in alphabetical order - genres_songs
#   Tell ActiveRecord about it
#     g.songs
#     s.genres
#
# has_many :through
#   Use other associations
