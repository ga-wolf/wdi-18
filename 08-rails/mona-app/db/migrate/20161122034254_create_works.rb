class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|
      t.text :title
      t.text :year
      t.text :medium
      t.text :style
      t.text :image

      t.timestamps null: false
      # created_at and updated_at
    end
  end
end
