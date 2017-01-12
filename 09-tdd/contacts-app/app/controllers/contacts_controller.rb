class ContactsController < ApplicationController
  def show
    # This will be stored as assigns[:contact] in the ContactsControllerSpec
    @contact = Contact.find_by id: params[:id]
  end
end
