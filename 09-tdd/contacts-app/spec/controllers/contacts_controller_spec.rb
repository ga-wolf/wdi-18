require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
  describe "GET #show" do
    it "assigns the requested contact to @contact" do
      # Create the data you need
      contact = create :contact
      # Fake the request
      get :show, id: contact.id
      # Validate something
      expect( assigns[:contact] ).to eq(contact)
    end
    it "renders the show template" do
      contact = create :contact
      get :show, id: contact.id
      expect(response).to render_template(:show)
    end
  end

  describe "GET #index" do
    context "without params[:letter]" do
      it "populates an array of all contacts"
      it "renders the index template"
    end
    context "with params[:letter]"
  end
end
