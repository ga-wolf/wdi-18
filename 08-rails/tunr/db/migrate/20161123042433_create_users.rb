class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :email
      t.text :name
      t.boolean :admin, :default => false
      t.text :image
      t.text :password_digest

      t.timestamps null: false
    end
  end
end
