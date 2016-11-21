class PagesController < ApplicationController

  def home
  end

  def about
  end

  def faq
  end

  def random
    colors = ["rebeccapurple", "gainsboro", "deeppink", "hotpink", "dodgerblue", "lemonchiffon", "lightslategray", "tomato", "#663399", "limegreen", "crimson"]
    @color = colors.sample 
  end

end
