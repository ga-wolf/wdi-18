-- Create a new table in the database.db file
-- This will keep track of all of the people in our system

-- sqlite3 database.db < create_people_table.sql
-- sqlite3 database.db
  -- .schema
  -- CTRL + D to exit

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);
