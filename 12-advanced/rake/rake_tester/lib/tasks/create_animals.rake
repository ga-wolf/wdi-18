# The CSV class isn't part of the core Ruby library, so we need to require it:
require 'csv'

desc "Get animals from CSV and print info"
# This task needs the Rails environment.
task :get_animals => :environment do
  # Use the File class to read the contents of the csv file we've saved at lib/tasks/animals.csv and store the contents of that csv in a variable called csv_text.
  csv_text = File.read "#{Rails.root}/lib/tasks/animals.csv"

  # Create a new instance of the CSV class, passing in the csv_text variable as the data, as well as the options necessary to tell Ruby that the first row in the csv is a header row, and to convert the headers to symbols.
  csv = CSV.new csv_text, :headers => true, :header_converters => :symbol

  # Call the to_a method on the csv instance object, and map each element in that array (which represents a row in our csv) to the block:
  csv.to_a.map do |row|
    # Convert the row to a hash:
    r = row.to_hash
    # Create a new record from that row.
    a = Animal.create( {:name => r[:name], :age => r[:age].to_i, :breed => r[:breed] })
    p "Created a new Animal record: #{r[:name]} is a #{r[:age]} year old #{r[:breed]}."
  end

end

# We can now see this task in our app's Rake tasks by running `rake -T`
# And we can run the task with `rake get_animals`
