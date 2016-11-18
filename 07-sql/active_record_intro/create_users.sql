-- Table named users will be represented by a class (or model) named User
  -- ActiveRecord will let the class and table communicate
    -- Protects us from writing SQL
    -- Provides validations
    -- Assists in working with associations
    -- It looks like Ruby

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  username TEXT,
  description TEXT
);

-- Seeding the database
INSERT INTO users (first_name, last_name, username, description) VALUES ("Bill", "Withers", "bill", "What a person");
INSERT INTO users (first_name, last_name, username, description) VALUES ("Django", "Reinhardt", "minorswing", "Stephen Grappelli");
INSERT INTO users (first_name, last_name, username, description) VALUES ("Jacques", "Cousteau", "jacques", "Hello World");
