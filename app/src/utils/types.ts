// projects table types
export type Project = {
  id: number;
  name: string;
  description: string;
  team_bio: string;
  team_name: string;
  profile_picture: any,
};

// assets table types
export type Asset = {
  id: number;
  project_id: number;
  type: string;
  increment: number;
  data: any,
};