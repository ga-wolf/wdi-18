class AddArtistIdToWorks < ActiveRecord::Migration
  def change
    # add_column :table_name, :field_name, :data_type
    add_column :works, :artist_id, :integer
  end
end
