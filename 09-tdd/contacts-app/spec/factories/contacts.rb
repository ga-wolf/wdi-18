FactoryGirl.define do
  factory :contact do
    first_name "John"
    last_name "Doe"
    sequence(:email) { |i| "johndoe#{i}@ga.co" }
  end
end
