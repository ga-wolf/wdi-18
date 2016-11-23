# == Schema Information
#
# Table name: mixtapes
#
#  id         :integer          not null, primary key
#  name       :text
#  user_id    :integer
#  is_fire    :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Mixtape < ActiveRecord::Base
  belongs_to :user
end
