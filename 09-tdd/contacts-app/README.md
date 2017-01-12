# Setting up an RSpec Application

- Create your app
  - ` rails _4.2.6_ new app-name -T `
  - ` cd app-name `
- Add the following into development and test environments in your Gemfile

```ruby
gem 'rspec-rails'
gem 'factory_girl_rails'
```

- ` bundle `
- Install RSpec
  - ` rails generate rspec:install `
- Go into the spec/rails_helper.rb and add this: ` config.include FactoryGirl::Syntax::Methods `
- Create your models
  - Migrate
- Creating tests
  - Figure out all requirements
