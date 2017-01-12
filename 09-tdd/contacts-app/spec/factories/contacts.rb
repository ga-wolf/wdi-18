FactoryGirl.define do
  factory :contact do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    sequence(:email) { |i| "johndoe#{i}@ga.co" }

    after(:build) do |contact|
      [:home_phone, :office_phone, :mobile_phone].each do |p|
        FactoryGirl.create p, contact: contact
      end
    end
  end
end
