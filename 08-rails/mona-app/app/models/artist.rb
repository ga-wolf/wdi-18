# == Schema Information
#
# Table name: artists
#
#  id          :integer          not null, primary key
#  name        :text
#  nationality :text
#  dob         :date
#  period      :text
#  image       :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Artist < ActiveRecord::Base
  has_many :works
end

# a = Artist.first # id is 1
#
# w1 = Work.create :artist_id => 1
# w2 = Work.create :artist_id => 1
# w3 = Work.create :artist_id => 2
#
# a.works # [ w1, w2 ]
