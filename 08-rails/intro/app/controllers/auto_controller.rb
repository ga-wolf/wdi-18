class AutoController < ApplicationController

  def color
    @color = params[:color]
  end

  def hp
    @hp = params[:hp]
    @torque = params[:torque]
  end

end
