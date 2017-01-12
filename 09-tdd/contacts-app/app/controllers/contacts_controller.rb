class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
  end
  def show
    # This will be stored as assigns[:contact] in the ContactsControllerSpec
    @contact = Contact.find_by id: params[:id]
  end
end
