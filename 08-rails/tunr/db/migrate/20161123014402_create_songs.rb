class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.text :name
      t.integer :artist_id # FOREIGN KEY
      t.integer :album_id  # FOREIGN KEY

      t.timestamps null: false # CREATED_AT & UPDATED_AT
    end
  end
end
