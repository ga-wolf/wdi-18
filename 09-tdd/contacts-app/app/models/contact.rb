class Contact < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true

  # Instance methods
  def full_name
    [first_name, last_name].join(" ")
  end

  def self.by_letter( letter )
    self.where("last_name LIKE ?", "#{letter}%").order(:last_name)
  end
end
