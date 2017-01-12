FactoryGirl.define do
  factory :phone do
    phone { Faker::PhoneNumber.phone_number }
    association :contact # Use the Contact factory

    factory :home_phone do
      phone_type "Home"
    end

    factory :office_phone do
      phone_type "Office"
    end

    factory :mobile_phone do
      phone_type "Mobile"
    end
  end
end
