json.extract! animal, :id, :name, :age, :breed, :created_at, :updated_at
json.url animal_url(animal, format: :json)