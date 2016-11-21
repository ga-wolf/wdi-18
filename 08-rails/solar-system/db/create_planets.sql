-- rake db:create
  -- This creates our development.sqlite3 file (same as database.db)

-- sqlite3 development.sqlite3 < create_planets.sql

CREATE TABLE planets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  orbit FLOAT,
  diameter FLOAT,
  moons INTEGER
);
