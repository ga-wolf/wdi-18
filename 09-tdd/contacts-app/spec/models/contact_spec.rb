require 'rails_helper'

RSpec.describe Contact, type: :model do
  it "has a valid factory" do
    expect( build(:contact) ).to be_valid
  end

  it "is valid with a first name, last name and email" do
    # Set up the data
    contact = build(:contact)
    # Validate something
    expect(contact).to be_valid
  end

  it "is invalid without a first name" do
    contact = build(:contact, first_name: nil)
    contact.valid? # Generate the error messages
    expect(contact.errors[:first_name]).to include("can't be blank")
  end

  it "is invalid without a last name" do
    contact = build(:contact, last_name: nil)
    contact.valid? # Generate the error messages
    expect(contact.errors[:last_name]).to include("can't be blank")
  end

  it "is invalid without an email address" do
    contact = build(:contact, email: nil)
    contact.valid? # Generate the error messages
    expect(contact.errors[:email]).to include("can't be blank")
  end

  it "is invalid with a duplicate email address" do
    # We need to create a Contact
    create(:contact, email: "marx@ga.co")
    # We need to build a Contact
    contact = build(:contact, email: "marx@ga.co")
    # We need to ask if something is valid
    contact.valid?
    # We need to test for some error message
    expect(contact.errors[:email]).to include("has already been taken")
  end

  it "returns a contact's full name as a string" do
    contact = build(:contact, first_name: "Bill", last_name: "Murray")
    expect(contact.full_name).to eq("Bill Murray")
  end

  describe "filter last name by letter" do
    before :each do
      @tim = Contact.create({
        first_name: "Tim",
        last_name: "Smith",
        email: "timsmith@ga.co"
      })
      @jones = Contact.create({
        first_name: "Roger",
        last_name: "Jones",
        email: "roger@ga.co"
      })
      @john = Contact.create({
        first_name: "Johnny",
        last_name: "Johnson",
        email: "john@ga.co"
      })
    end

    context "with matching letters" do
      it "returns a sorted array of results that match" do
        # Call some method - Contact.by_letter("J")
        results = Contact.by_letter("J")

        # Validate that only correct data was returned
        expect(results).to eq( [@john, @jones] )
      end
    end

    context "with non-matching letters" do
      it "omits contacts that don't match" do
        results = Contact.by_letter("J")
        expect(results).not_to include @tim
      end
    end
  end
end
