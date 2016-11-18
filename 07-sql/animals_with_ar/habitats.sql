-- sqlite3 database.db < habitats.sql

CREATE TABLE habitats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  landscape TEXT,
  climate TEXT
);
