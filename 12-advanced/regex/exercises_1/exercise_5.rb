# Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.


ARGF.each do |line|

  if line =~ /(\S)\1/
    puts line
  end

end
