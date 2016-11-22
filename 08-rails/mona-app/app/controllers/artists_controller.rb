# rails generate controller Artists index
# rails g controller Artists index

class ArtistsController < ApplicationController

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find_by :id => params["id"]
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params
    redirect_to "/artists/#{artist.id}"
  end

  def edit
    @artist = Artist.find_by :id => params["id"]
  end

  def update
    artist = Artist.find_by :id => params["id"]
    artist.update artist_params
    redirect_to "/artists/#{artist.id}"
  end

  def destroy
    artist = Artist.find_by :id => params["id"]
    artist.destroy
    redirect_to "/artists"
  end

  private
    def artist_params
      # Strong params (for security) - using whitelisting to guarantee valid data
      params.require(:artist).permit(:name, :image, :nationality, :dob, :period)
    end

end
