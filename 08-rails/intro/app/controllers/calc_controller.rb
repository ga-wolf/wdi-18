class CalcController < ApplicationController
  def calculate
    @x = params[:x].to_f
    @operator = params[:operator]
    @y = params[:y].to_f

    @result = case @operator
              when "+" then @x + @y
              when "-" then @x - @y
              when "*" then @x * @y
              when "divide" then @x / @y
              end
  end
end
