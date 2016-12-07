class PagesController < ApplicationController
  def index
    # render :html => "pages/index.html.erb"
  end

  def generator
    
    options = {
      titles: ["Mr", "Lord", "Count"],
      first_names: ["Lewis", "Cooper", "Jack"],
      last_names: ["Fallancy", "Raymond", "Ferguson"]
    }

    @cat_name = {
      :title => options[:titles].sample,
      :first_name => options[:first_names].sample,
      :last_name => options[:last_names].sample
    }

    respond_to do |format|
      format.json { render :json => @cat_name}
      format.html { render :template => 'pages/generator'}
    end


  end


end
