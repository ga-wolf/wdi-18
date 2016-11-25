class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.text :password_digest
      t.string :email
      t.date :dob

      t.timestamps null: false
    end
  end
end
