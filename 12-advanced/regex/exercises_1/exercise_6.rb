# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  if line =~ /(wilma.*fred)|(fred.*wilma)/
    puts line
  end
end
