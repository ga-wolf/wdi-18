class WorksController < ApplicationController
  def index
    @works = Work.all
  end

  def show
    @work = Work.find_by :id => params["id"]
  end

  def new
    @work = Work.new
  end

  def create
    work = Work.create work_params
    # binding.pry
    # redirect_to work_path( work )
    redirect_to work
  end

  def edit
    @work = Work.find_by :id => params["id"]
  end

  def update
    work = Work.find_by :id => params["id"]
    work.update work_params()
    redirect_to work
  end

  def destroy
    work = Work.find_by :id => params["id"]
    work.destroy
    redirect_to works_path()
  end

  private
    def work_params
      params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
    end
end
