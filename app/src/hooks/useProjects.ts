import { useQuery } from 'react-query';
import { Project, Asset } from '../utils/types';
import { getProjects, getAssets, getProject } from '../utils/api';
import { getProjectById } from '@/lib/db';
import { useRouter } from 'next/router';

// Hook to fetch projects
export function useProjects() {
  const { data: projects, isLoading, error } = useQuery<Project[], Error>('projects', getProjects);

  return { projects, isLoading, error };
}

export function useProject() {
  const router = useRouter();
  const { id } = router.query;
  let project_id = parseInt(id as string);

  const { data: project, isLoading, error } = useQuery<Project, Error>(['project', project_id ], () => getProject(project_id));
  return { project, isLoading, error };
}

// Hook to fetch assets for a project
export function useAssets(projectId: number) {
  const { data: assets, isLoading, error } = useQuery<Asset[], Error>(['assets', projectId], () => getAssets(projectId));

  return { assets, isLoading, error };
}