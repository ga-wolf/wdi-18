class CreateGenresSongs < ActiveRecord::Migration
  def change
    create_table :genres_songs, :id => false do |t|

      t.integer :genre_id
      t.integer :song_id

    end
  end
end

# A join table (sneaky table) needs to be in alphabetical order
  # mixtapes_users, genres_songs, posts_tags
  # Only has foreign keys
  # It doesn't need an ID as it will never be interacted with directly
