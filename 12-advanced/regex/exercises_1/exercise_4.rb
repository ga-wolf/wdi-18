# Make a program that prints each line that has a word that is capitalized but not ALL capitalized. Does it match Fred but neither fred nor FRED?

ARGF.each do |line|

  if line =~ /\b[A-Z][a-z]/
    puts line
  end

end
