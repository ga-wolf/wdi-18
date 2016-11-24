# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :text
#  name            :text
#  admin           :boolean          default(FALSE)
#  image           :text
#  password_digest :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password
  # If someone provides a password and a password_confirmation, encrypt it and save the encrypted value into the password_digest field
    # It also provides a method called .authenticate
    # It adds a bunch of validations
  has_many :mixtapes
end
