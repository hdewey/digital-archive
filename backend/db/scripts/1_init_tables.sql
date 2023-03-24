CREATE SCHEMA tables;

-- Create projects table
CREATE TABLE tables.projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  team_bio TEXT,
  profile_picture BYTEA
);

-- Create assets table
CREATE TABLE tables.assets (
  id SERIAL PRIMARY KEY,
  project_id INTEGER NOT NULL REFERENCES tables.projects(id),
  type VARCHAR(255) NOT NULL,
  increment INTEGER NOT NULL,
  data BYTEA
);

CREATE USER "henry" WITH ENCRYPTED PASSWORD 'archive';
ALTER USER "henry" WITH SUPERUSER;