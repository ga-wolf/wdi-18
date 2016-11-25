class AddDobToPets < ActiveRecord::Migration
  def change
    add_column :pets, :dob, :date
  end
end
