import { Pool } from 'pg';
import { Project, Asset } from '../utils/types';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Projects table functions

export async function getAllProjects(): Promise<Project[]> {
  const { rows } = await pool.query('SELECT * FROM tables.projects');
  return rows;
}

export async function getProjectById(id: number): Promise<Project> {
  const { rows } = await pool.query('SELECT * FROM tables.projects WHERE id = $1', [id]);
  return rows[0];
}

export async function createProject(
  name: string,
  description: string,
  teamBio: string,
  profilePicture: string
): Promise<Project> {
  const { rows } = await pool.query(
    'INSERT INTO tables.projects (name, description, team_bio, profile_picture) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, description, teamBio, profilePicture]
  );
  return rows[0];
}

export async function updateProject(
  id: number,
  name: string,
  description: string,
  teamBio: string,
  profilePicture: string
): Promise<Project> {
  const { rows } = await pool.query(
    'UPDATE tables.projects SET name = $1, description = $2, team_bio = $3, profile_picture = $4 WHERE id = $5 RETURNING *',
    [name, description, teamBio, profilePicture, id]
  );
  return rows[0];
}

export async function deleteProject(id: number): Promise<Project> {
  const { rows } = await pool.query('DELETE FROM tables.projects WHERE id = $1 RETURNING *', [id]);
  return rows[0];
}

// Assets table functions

export async function getAllAssets(): Promise<Asset[]> {
  const { rows } = await pool.query('SELECT * FROM tables.ssets');
  return rows;
}

export async function getAssetsByProjectId(projectId: number): Promise<Asset[]> {
  const { rows } = await pool.query('SELECT * FROM tables.assets WHERE project_id = $1', [projectId]);
  return rows;
}

export async function createAsset(
  projectId: number,
  type: string,
  increment: number,
  data: Buffer
): Promise<Asset> {
  const { rows } = await pool.query(
    'INSERT INTO tables.assets (project_id, type, increment, data) VALUES ($1, $2, $3, $4) RETURNING *',
    [projectId, type, increment, data]
  );
  return rows[0];
}

export async function updateAsset(
  id: number,
  projectId: number,
  type: string,
  increment: number,
  data: Buffer
): Promise<Asset> {
  const { rows } = await pool.query(
    'UPDATE tables.assets SET project_id = $1, type = $2, increment = $3, data = $4 WHERE id = $5 RETURNING *',
    [projectId, type, increment, data, id]
  );
  return rows[0];
}

export async function deleteAsset(id: number): Promise<Asset> {
  const { rows } = await pool.query('DELETE FROM tables.assets WHERE id = $1 RETURNING *', [id]);
  return rows[0];
}