Post.destroy_all

5.times do |index|
  title = "Post \##{index + 1}"
  author = "Author \##{index + 1}"
  content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni similique voluptate ratione ipsum excepturi ipsa necessitatibus voluptatum, facilis illum enim, et ducimus architecto aut perferendis earum eum, esse! Sapiente, nesciunt! " * ( index + 1 )

  Post.create(:title => title, :author => author, :content => content)
end

puts "Post count: #{ Post.all.count }"
