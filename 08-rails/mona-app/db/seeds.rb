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
