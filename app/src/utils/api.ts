import { Project, Asset } from './types';

const API_BASE_URL = '/api'; // Our API routes are "local" in path to the client.

// Function to fetch data from the API
async function fetchData<T>(url: string, method: string, data?: T): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
}

// Functions to interact with the Projects API
export async function getProjects(): Promise<Project[]> {
  const url = `${API_BASE_URL}/projects`;
  const projects = await fetchData<Project[]>(url, 'GET');
  return projects;
}

export async function createProject(project: Project): Promise<Project> {
  const url = `${API_BASE_URL}/projects`;
  const createdProject = await fetchData<Project>(url, 'POST', project);
  return createdProject;
}

export async function updateProject(project: Project): Promise<Project> {
  const url = `${API_BASE_URL}/projects/${project.id}`;
  const updatedProject = await fetchData<Project>(url, 'PUT', project);
  return updatedProject;
}

export async function deleteProject(projectId: number): Promise<void> {
  const url = `${API_BASE_URL}/projects/${projectId}`;
  await fetchData<void>(url, 'DELETE');
}

// Functions to interact with the Assets API
export async function getAssets(projectId: number): Promise<Asset[]> {
  const url = `${API_BASE_URL}/projects/${projectId}/assets`;
  const assets = await fetchData<Asset[]>(url, 'GET');
  return assets;
}

export async function createAsset(asset: Asset): Promise<Asset> {
  const url = `${API_BASE_URL}/assets`;
  const createdAsset = await fetchData<Asset>(url, 'POST', asset);
  return createdAsset;
}

export async function updateAsset(asset: Asset): Promise<Asset> {
  const url = `${API_BASE_URL}/assets/${asset.id}`;
  const updatedAsset = await fetchData<Asset>(url, 'PUT', asset);
  return updatedAsset;
}

export async function deleteAsset(assetId: number): Promise<void> {
  const url = `${API_BASE_URL}/assets/${assetId}`;
  await fetchData<void>(url, 'DELETE');
}