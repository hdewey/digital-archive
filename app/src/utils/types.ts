// projects table types
export interface Project {
  id: number;
  project_name: string;
  student_name: string;
  project_class: string;
  student_year: string;
  semester_made: string;
  description: string;
  mindset: string;
  final_product: string;
  profile_picture: string;
}

export interface Asset {
  id: number;
  project_id: number;
  asset_url: string;
}