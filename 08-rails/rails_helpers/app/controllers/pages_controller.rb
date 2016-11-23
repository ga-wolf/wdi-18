class PagesController < ApplicationController
  def home
    @num = 5
  end

  def numbers
    @large_number = 98248187834
    @phone_number = 5553424
    @price = 862.2349763
  end

  def text
    @numbers = [1,2,3,4,5,6,8,9,10]
    @friends = 3
    @enemies = 123 + 13
    @story = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."*15
  end

  def date

  end

  def single_number

  end

end
