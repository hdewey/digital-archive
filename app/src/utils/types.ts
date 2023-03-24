// projects table types
export type Project = {
  id: number;
  name: string;
  description: string;
  team_bio: string;
  profile_picture: string;
};

// assets table types
export type Asset = {
  id: number;
  project_id: number;
  type: string;
  increment: number;
  data: Buffer;
};