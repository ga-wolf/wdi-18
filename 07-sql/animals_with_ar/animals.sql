-- table names are always plural, and always snake_case - animals
-- id integer, primary key, autoincrement
-- species text
-- image as text
-- description as text

CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species TEXT,
  image TEXT,
  description TEXT
);
