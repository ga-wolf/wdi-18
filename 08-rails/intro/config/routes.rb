Rails.application.routes.draw do
  # method "/route/:id" => "controller#action"
  # Given a route and an HTTP verb or method
    # Which controller should I go to?
    # Which action in that controller should run?

  get "/home" => "pages#home"
  get "/about" => "pages#about"
  get "/faq" => 'pages#faq'
  get "/random_color" => 'pages#random'

  get "/auto/:color" => 'auto#color'
  get "/auto/:hp/:torque" => 'auto#hp'
  # You'll need params, instance variables, a new action and a new file
    # HP: 42
    # Torque: 42

  get "/calc/:x/:operator/:y" => 'calc#calculate'

end
