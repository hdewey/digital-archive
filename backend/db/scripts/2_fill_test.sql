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
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  '‘Bara', 
  'Austin Li', 
  'ACAD 240: Materials: Denim to Nanotubes',
  'C8',
  'Fall 2022',
  read_text_file('/test/baby_bara/desc.txt'), 
  read_text_file('/test/baby_bara/bio.txt'), 
  '/assets/projects/baby_bara/0.jpeg',
  '/assets/avatars/default_avatar.png'
);

INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (4, '/assets/projects/baby_bara/1.jpeg');

-- GHOST SHOE PROJECT (id: 5)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'Ghost Shoe Prototype', 
  'Zander Tate', 
  'ACAD 245: Designing Products I',
  'C8',
  'Spring 2023',
  read_text_file('/test/ghost_shoe/desc.txt'), 
  read_text_file('/test/ghost_shoe/bio.txt'), 
  '/assets/projects/ghost_shoe/0.jpeg',
  '/assets/avatars/default_avatar.png'
);

INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (5, '/assets/projects/ghost_shoe/1.jpeg'),
  (5, '/assets/projects/ghost_shoe/2.jpeg'),
  (5, '/assets/projects/ghost_shoe/3.jpeg'),
  (5, '/assets/projects/ghost_shoe/4.jpeg');

-- KENNY KOALA PROJECT (id: 6)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'Kenny the Koala: A Fidget Plushie', 
  'Aaron Wong and Lisa Ly', 
  'ACAD 281: Designing Live Experiences',
  'Minors',
  'Spring 2023',
  read_text_file('/test/kenny_koala/desc.txt'), 
  read_text_file('/test/kenny_koala/bio.txt'), 
  '/assets/projects/kenny_koala/0.jpeg',
  '/assets/avatars/default_avatar.png'
);

-- LADLE COASTER PROJECT (id: 7)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'Scüpr Ladle and Coastest Coasters', 
  'Andy Cho', 
  'ACAD 240: Materials',
  'Minor',
  'Spring 2023',
  read_text_file('/test/ladle_coaster/desc.txt'), 
  read_text_file('/test/ladle_coaster/bio.txt'), 
  '/assets/projects/ladle_coaster/0.jpeg',
  '/assets/avatars/default_avatar.png'
);

INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (7, '/assets/projects/ladle_coaster/1.jpeg'),
  (7, '/assets/projects/ladle_coaster/2.jpeg'),
  (7, '/assets/projects/ladle_coaster/3.jpeg'),
  (7, '/assets/projects/ladle_coaster/4.jpeg'),
  (7, '/assets/projects/ladle_coaster/5.jpeg'),
  (7, '/assets/projects/ladle_coaster/6.jpeg'),
  (7, '/assets/projects/ladle_coaster/7.jpeg');

-- IDEAL HOME PROJECT (id: 8)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'My Ideal Home', 
  'Alexis Kim', 
  'ACAD 281: Designing Live Experiences',
  'C8',
  'Spring 2023',
  read_text_file('/test/ideal_home/desc.txt'), 
  read_text_file('/test/ideal_home/bio.txt'), 
  '/assets/projects/ideal_home/0.jpeg',
  '/assets/avatars/default_avatar.png'
);

INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (8, '/assets/projects/ideal_home/1.jpeg'),
  (8, '/assets/projects/ideal_home/2.jpeg'),
  (8, '/assets/projects/ideal_home/3.jpeg'),
  (8, '/assets/projects/ideal_home/4.jpeg'),
  (8, '/assets/projects/ideal_home/5.jpeg');

-- CASUAL HIKER PROJECT (id: 9)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'The Casual Hiker', 
  'Noy Chatoyan', 
  'ACAD 245 Designing Products I',
  'C8',
  'Spring 2023',
  read_text_file('/test/casual_hiker/desc.txt'), 
  read_text_file('/test/casual_hiker/bio.txt'), 
  '/assets/projects/casual_hiker/0.jpeg',
  '/assets/avatars/default_avatar.png'
);

INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (9, '/assets/projects/casual_hiker/1.jpeg');

-- LIGHT BOX PROJECT (id: 10)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'Turrell Light Box', 
  'Zander Tate, Ezra Bird, and Henry Dewey', 
  'ACAD 324: The Practice of Design',
  'C8',
  'Fall 2022',
  read_text_file('/test/light_box/desc.txt'), 
  read_text_file('/test/light_box/bio.txt'), 
  '/assets/projects/light_box/0.jpeg',
  '/assets/avatars/default_avatar.png'
);

INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (10, '/assets/projects/light_box/1.jpeg'),
  (10, '/assets/projects/light_box/2.jpeg'),
  (10, '/assets/projects/light_box/3.jpeg'),
  (10, '/assets/projects/light_box/4.jpeg'),
  (10, '/assets/projects/light_box/5.jpeg'),
  (10, '/assets/projects/light_box/6.jpeg'),
  (10, '/assets/projects/light_box/7.jpeg');

-- PEEK PROJECT (id: 11)
INSERT INTO tables.projects (project_name, student_name, project_class, student_year, semester_made, description, mindset, final_product, profile_picture)
VALUES (
  'Peek', 
  'Chris Lewis', 
  'PRIN 520: Creators Studio',
  'C8',
  'Spring 2023',
  read_text_file('/test/peek_glove/desc.txt'), 
  read_text_file('/test/peek_glove/bio.txt'), 
  '/assets/projects/peek_glove/0.jpeg',
  '/assets/avatars/default_avatar.png'
);

INSERT INTO tables.project_assets (project_id, asset_url)
VALUES
  (11, '/assets/projects/peek_glove/1.jpeg'),
  (11, '/assets/projects/peek_glove/2.jpeg');

-- RECOVERY BLADE PROJECT (id: 12)

-- DOM JACKET PROJECT (id: 13)

