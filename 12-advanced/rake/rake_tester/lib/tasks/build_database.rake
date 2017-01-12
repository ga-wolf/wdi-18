# In the db namespace...
namespace :db do
  # ... create a task with this description...
  desc "Drop and rebuild database"
  # ... and this name (meaning we would run the task with rake db:regenerate... )
  task :regenerate do
    # ... invoke the following Rake tasks...
    Rake::Task['db:drop'].invoke
    Rake::Task['db:create'].invoke
    Rake::Task['db:migrate'].invoke
    Rake::Task['db:seed'].invoke
    # ... and puts this string to the terminal:
    puts "Rebuilt database."
  end
end
