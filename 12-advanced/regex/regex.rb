# Captures
message = "/giphy Satantango"
regex = /\/(\w+) (.*)/
match = message.match( regex )

p match
p match[1]

# Named Captures
message = "/giphy Satantango"
regex = /\/(?<cmnd>\w+) (?<term>.*)/
match = message.match( regex )

p match
p match.pre_match
p match[:cmnd]
p match.post_match
p match.string

some_num = "Number: 202-555-1701"
regex = /(\d+)-(\d+)-(\d+)/
better_regex = /(?<area>\d+)-(?<exchange>\d+)-(?<suffix>\d+)/
matches = some_num.match better_regex

p matches
p matches[:area]
p matches[:exchange]
p matches[:suffix]

# Anchors

# The start of the string? ^
p "ruby   " =~ /^ruby/
p "  ruby " =~ /^ruby/
p "   ruby" =~ /^ruby/

# The end of the string? $
p "ruby   " =~ /ruby$/
p "  ruby " =~ /ruby$/
p "   ruby" =~ /ruby$/

msg = "/giphy Satantango"
invalid_msg = "    /giphy Satantango"
regex = /^\/(\w+) (.+)/

valid_match = msg.match regex
p valid_match

invalid_match = invalid_msg.match regex
p invalid_match

# Flags
# i == case insensitivity
p "RUBY" =~ /ruby/i

# x == multiline and commented
number = "202-555-1701"
regex  = /
  (?<area>\d+)-     # This is the area code
  (?<exchange>\d+)- # This is the exchange code
  (?<suffix>\d+)    # This is the suffix
/x

p number.match regex

str_one = "Jack,42,wolf@ga.co"
str_two = "Badger,7,badger@ga.co"
str_three = "Kane,4,kane.mott@ga.co"

# Write a multiline regex (should be case insensitive)
  # Use named parameters to select the name, favourite number and email of each of these strings
regex = /
  (?<name>\w+),
  (?<fav_num>\d+),
  (?<email>.*)
/xi
p str_one.match regex
p str_two.match regex
p str_three.match regex

# Greedy vs. Reluctant Regular Expressions
num = "202-555-1701"
greedy_regex = /
  (\d+).*
  (\d+).*
  (\d+)
/x

p num.match greedy_regex

num = "202-555-1701"
reluctant_regex = /
  (\d+).*?
  (\d+).*?
  (\d+)
/x

p num.match reluctant_regex

html = "<html><div></div></html>"

p html.match /<(.*)>/
p html.match /<(.*?)>/
