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
      it "populates an array of all contacts" do
        smith = create :contact
        jones = create :contact
        get :index
        expect(assigns[:contacts]).to match_array([smith, jones])
      end

      it "renders the index template" do
        get :index
        expect(response).to render_template(:index)
      end
    end

    context "with params[:letter]" do
      it "populates an array of all relevant contacts" do
        johns = create :contact, last_name: "Johns"
        jones = create :contact, last_name: "Jones"
        smith = create :contact, last_name: "Smith"

        # This will set up params[:letter]
        get :index, letter: "J"

        expect( assigns[:contacts] ).to eq([johns, jones])
      end

      it "renders the index template" do
        get :index, letter: "M"
        expect(response).to render_template(:index)
      end
    end
  end

  describe "GET #new" do
    it "assigns a new contact to @contact" do
      get :new
      # Is ` @contact = Contact.new ` in the controller?
      expect( assigns[:contact] ).to be_a_new(Contact)
    end

    it "renders the new template" do
      get :new
      expect( response ).to render_template(:new)
    end
  end

  describe "GET #edit" do
    it "assigns the correct contact to @contact" do
      c = create :contact
      get :edit, id: c.id
      expect( assigns[:contact] ).to eq( c )
    end

    it "renders the edit template" do
      c = create :contact
      get :edit, id: c.id
      expect( response ).to render_template(:edit)
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      it "saves the contact in the database" do
        # Fake a POST request passing valid attributes as params
        # Expect Contact.count to change by 1
        expect {
          post :create, contact: FactoryGirl.attributes_for(:contact)
        }.to change(Contact, :count).by 1
      end

      it "redirects to the contact's show page" do
        post :create, contact: FactoryGirl.attributes_for(:contact)
        path = contact_path( assigns[:contact] )
        expect(response).to redirect_to( path )
      end
    end

    context "with invalid attributes"
  end
end
