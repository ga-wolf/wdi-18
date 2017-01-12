class ContactsController < ApplicationController
  def index
    # /contacts?letter=J
    # get :index, letter: "J"
    if params[:letter]
      @contacts = Contact.by_letter( params[:letter] )
    else
      @contacts = Contact.all
    end
  end

  def show
    # This will be stored as assigns[:contact] in the ContactsControllerSpec
    @contact = Contact.find_by id: params[:id]
  end

  def new
    @contact = Contact.new
  end

  def edit
    @contact = Contact.find_by id: params[:id]
  end

  def create
    @contact = Contact.new contact_params
    if @contact.save
      redirect_to contact_path(@contact)
    end
  end

  private
    def contact_params
      params.require(:contact).permit(:first_name, :last_name, :email)
    end
end
