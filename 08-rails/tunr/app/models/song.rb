# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  name       :text
#  artist_id  :integer
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ActiveRecord::Base
  belongs_to :album
  belongs_to :artist
  has_and_belongs_to_many :mixtapes
  has_and_belongs_to_many :genres
  # Define a genres method on each song
    # It will go through the sneaky table
      # Find all associated genres
end
