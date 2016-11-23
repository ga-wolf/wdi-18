class CreateArtists < ActiveRecord::Migration
  def change
    # rails generate model Artist name:text image:text
    
    create_table :artists do |t|
      t.text :name
      t.text :image

      t.timestamps null: false
    end
  end
end
