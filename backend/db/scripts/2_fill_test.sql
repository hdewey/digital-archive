-- Insert test projects
INSERT INTO tables.projects (name, description, team_bio, profile_picture)
VALUES
  ('Project A', 'This is a test project.', 'Team A is a group of talented individuals.', '../test/profile_test.jpg'),
  ('Project B', 'This is another test project.', 'Team B is a diverse and experienced team.', '../test/profile_test.jpg'),
  ('Project C', 'Yet another test project.', 'Team C is a small but agile team.', '../test/profile_test.jpg'),
  ('Project D', 'The final test project.', 'Team D is a group of students from a local university.', '../test/profile_test.jpg');

-- Insert final product assets
INSERT INTO tables.assets (project_id, type, increment, data)
VALUES
  (1, 'text', 0, 'This is the final product for Project A. Bah blah bah'),
  (2, 'image', 0, '../test/image_data_test.jpg'),
  (3, '3d model', 0, '../test/3d_model_test.stl'),
  (4, 'text', 0, 'This is the final product for Project D.');

-- Insert process assets
INSERT INTO tables.assets (project_id, type, increment, data)
VALUES
  (1, 'image', 1, '../test/image_asset.jpg'),
  (1, 'image', 2, '../test/image_asset.jpg'),
  (2, 'text', 1, 'This is process asset 1 for Project B.'),
  (2, 'text', 2, 'This is process asset 2 for Project B.'),
  (2, 'image', 3, '../test/image_asset.jpg'),
  (3, 'text', 1, 'This is process asset 1 for Project C.'),
  (4, 'image', 1, '../test/image_asset.jpg');
