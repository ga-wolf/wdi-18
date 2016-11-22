# Give the database a good starting point
  # Make sure there are no duplicates
  # Create some dummy data
  # Run ` rake db:seed ` to execute this Ruby code

Artist.destroy_all

a1 = Artist.create({
  :name => "Joan Miro",
  :nationality => "Spanish",
  :dob => "1893/04/20",
  :period => "20th Century",
  :image => "http://www.joan-miro.net/images/joan-miro.jpg"
})
a2 = Artist.create({
  :name => "Salvador Dali",
  :nationality => "Spanish",
  :dob => "1904/05/11",
  :period => "20th Century",
  :image => "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
})

Work.destroy_all

w1 = Work.create({
  :title => "The Flight of the Dragonfly in Front of the Sun",
  :year => '1968',
  :medium => 'Oil on canvas',
  :style => 'Abstract',
  :image => 'http://www.joan-miro.net/images/paintings/the-flight-of-the-dragonfly-in-front-of-the-sun.jpg',
  :artist_id => a1.id
})

p "Work 1 Artist: #{w1.artist}"
p "Work 1 Artist Name: #{w1.artist.name}"
p "Artist 1 Works: #{a1.works}"

w2 = Work.create({
  :title => "The Persistence of Memory",
  :year => '1931',
  :medium => 'Oil on canvas',
  :style => 'Abstract',
  :image => 'http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/clocks.png',
  :artist_id => a2.id
})
w3 = Work.create({
  :title => "Swans Reflecting Elephants",
  :year => '1937',
  :medium => 'Oil on canvas',
  :style => 'Surrealism',
  :image => 'http://www.dalipaintings.com/images/paintings/swans-reflecting-elephants.jpg',
  :artist_id => a2.id
})

p "Work 2 Artist: #{w2.artist}"
p "Work 2 Artist Name: #{w2.artist.name}"

p "Work 3 Artist: #{w3.artist}"
p "Work 3 Artist Name: #{w3.artist.name}"

p "Artist 2 Works: #{a2.works}"
p "Artist 2 Work Count: #{a2.works.length}"
p "Artist 2 First Work Name: #{a2.works.first.title}"
