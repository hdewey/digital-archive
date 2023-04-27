CREATE SCHEMA tables;

CREATE TABLE tables.projects (
  id SERIAL PRIMARY KEY,
  project_name TEXT NOT NULL,
  student_name TEXT NOT NULL,
  project_class TEXT,
  student_year TEXT,
  semester_made TEXT,
  description TEXT,
  mindset TEXT,
  final_product TEXT,
  profile_picture TEXT
);

CREATE TABLE tables.project_assets (
  id SERIAL PRIMARY KEY,
  project_id INTEGER NOT NULL,
  asset_url TEXT NOT NULL
);

CREATE OR REPLACE FUNCTION read_text_file(p_file_path TEXT)
RETURNS TEXT AS $$
DECLARE
    l_content TEXT;
BEGIN
    SELECT pg_read_file(p_file_path, 0, 1000000000) -- Max file size in bytes
    INTO l_content;
    RETURN l_content;
END;
$$ LANGUAGE plpgsql;

CREATE USER "henry" WITH ENCRYPTED PASSWORD 'archive';
ALTER USER "henry" WITH SUPERUSER;