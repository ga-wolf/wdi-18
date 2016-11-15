require 'pry'
# First, I'll require the pry gem, because I'll probably need to do some debugging along the way.

# Create an array of the days of the week
days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# 2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.

# We could do this in two steps:
# days_of_the_week.pop
# days_of_the_week.unshift("Sunday")

# Or, since the pop method RETURNS the element that was removed, we could pass whatever the pop method returns into the unshift method, which will add that removed element to the start of the array
days_of_the_week.unshift(days_of_the_week.pop)

# 3. Create a new array of the days of the week:
new_days_of_the_week = []

# The first inner array should be the weekdays
weekdays = days_of_the_week[1..-2]

# The second inner array should be the weekend days
weekends = []
weekends.push(days_of_the_week[0])
# A negative index will count from the end of the array.
weekends.unshift(days_of_the_week[-1])

new_days_of_the_week.push(weekdays, weekends)

# 4. Remove either the weekdays or the weekends
new_days_of_the_week.pop

# 5. Sort the remaining days alphabetically
new_days_of_the_week[0].sort

puts "The result is #{new_days_of_the_week}."
