import { useQuery } from 'react-query';
import { Project, Asset } from '../utils/types';
import { getProjects, getAssets } from '../utils/api';

// Hook to fetch projects
export function useProjects() {
  const { data: projects, isLoading, error } = useQuery<Project[], Error>('projects', getProjects);

  return [projects, isLoading, error];
}

// Hook to fetch assets for a project
export function useAssets(projectId: number) {
  const { data: assets, isLoading, error } = useQuery<Asset[], Error>(['assets', projectId], () => getAssets(projectId));

  return [assets, isLoading, error];
}