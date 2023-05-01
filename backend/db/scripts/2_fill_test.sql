-- EACH PROJECT IS INSERTED INDIVIDUALLY

-- POTION DESIGN PROJECT (id: 1)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'Potion Design: Good Vibes', 
  'Sheila Wang', 
  'Rapid Visualization 176',
  'C9',
  'Fall 2022',
  read_text_file('/test/potion_design/desc.txt'), 
  read_text_file('/test/potion_design/mindset.txt'), 
  '/assets/projects/potion_design/0.jpg',
  '/assets/avatars/default_avatar.png'
);

-- POTION DESIGN PROCESS ASSETS
INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (1, '/assets/projects/potion_design/1.jpg'),
  (1, '/assets/projects/potion_design/2.jpg'),
  (1, '/assets/projects/potion_design/3.jpg'),
  (1, '/assets/projects/potion_design/5.jpg'),
  (1, '/assets/projects/potion_design/4.jpg'),
  (1, '/assets/projects/potion_design/6.jpg'),
  (1, '/assets/projects/potion_design/7.jpg'),
  (1, '/assets/projects/potion_design/8.jpg'),
  (1, '/assets/projects/potion_design/9.jpg'),
  (1, '/assets/projects/potion_design/10.jpg'),
  (1, '/assets/projects/potion_design/11.jpg'),
  (1, '/assets/projects/potion_design/12.jpg'),
  (1, '/assets/projects/potion_design/13.jpg'),
  (1, '/assets/projects/potion_design/14.jpg'),
  (1, '/assets/projects/potion_design/15.jpg'),
  (1, '/assets/projects/potion_design/16.jpg'),
  (1, '/assets/projects/potion_design/17.jpg');

-- PEPPER SPRAY PROJECT (id: 2)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'Pepper Spray', 
  'Michael Steele', 
  'ACAD 245: Designing Products 1',
  'C8',
  'Spring 2023',
  read_text_file('/test/pepper_spray/desc.txt'), 
  read_text_file('/test/pepper_spray/mindset.txt'), 
  '/assets/projects/pepper_spray/0.jpg',
  '/assets/avatars/default_avatar.png'
);

-- PEPPER SPRAY PROCESS ASSETS
INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (2, '/assets/projects/pepper_spray/1.jpg');

-- ICKRUS PITCH PROJECT  (id: 3)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'Ickrus', 
  'Kylee Pena', 
  'IDSN 599: Exponential Technologies',
  'Masters Student',
  'Fall 2022',
  read_text_file('/test/ickrus_pitch/desc.txt'), 
  read_text_file('/test/ickrus_pitch/mindset.txt'), 
  '/assets/projects/ickrus_pitch/0.jpg',
  '/assets/avatars/default_avatar.png'
);

-- ICKRUS PITCH PROCESS ASSETS
INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (3, '/assets/projects/ickrus_pitch/1.jpg'),
  (3, '/assets/projects/ickrus_pitch/2.jpg'),
  (3, '/assets/projects/ickrus_pitch/3.jpg'),
  (3, '/assets/projects/ickrus_pitch/5.jpg'),
  (3, '/assets/projects/ickrus_pitch/4.jpg'),
  (3, '/assets/projects/ickrus_pitch/6.jpg'),
  (3, '/assets/projects/ickrus_pitch/7.jpg'),
  (3, '/assets/projects/ickrus_pitch/8.jpg'),
  (3, '/assets/projects/ickrus_pitch/9.jpg'),
  (3, '/assets/projects/ickrus_pitch/10.jpg'),
  (3, '/assets/projects/ickrus_pitch/11.jpg'),
  (3, '/assets/projects/ickrus_pitch/12.jpg');

-- BABY BARA PROJECT (id: 4)

-- GHOST SHOE PROJECT (id: 5)

-- KENNY KOALA PROJECT (id: 6)

-- LADLE COASTER PROJECT (id: 7)

-- IDEAL HOME PROJECT (id: 8)

-- CASUAL HIKER PROJECT (id: 9)

-- LIGHT BOX PROJECT (id: 10)

-- RECOVERY BLADE PROJECT (id: 11)

-- DOM JACKET PROJECT (id: 12)

-- PEEK PROJECT (id: 13)