class PagesController < ApplicationController
  def index
    @lotto_numbers = (1..45).to_a.sample( 7 ).join(", ")
    @uptime = `uptime`
    @fortune = `fortune -s`
  end

  def lotto_numbers
    render :text => (1..45).to_a.sample( 7 ).join(", ")
  end

  def uptime
    render :text => `uptime`
  end

  def fortune
    render :text => `fortune -s`
  end

  def info
    @info = {
      :fortune => `fortune -s`,
      :uptime => `uptime`,
      :lucky_numbers => (1..45).to_a.sample( 7 ).join(", "),
      :current_time => Time.now.to_s
    }

    respond_to do |format|
      format.html {}
      format.json { render :json => @info }
    end
  end

end
