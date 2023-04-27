// TODO: need to use this more.

import { Asset, Project } from "./types";

export const emptyProject: Project = {
  id: 0,
  project_name: "",
  student_name: "",
  project_class: "",
  student_year: "",
  semester_made: "",
  description: "",
  mindset: "",
  final_product: "",
  profile_picture: "",
};

export const emptyProjectAsset: Asset = {
  id: 0,
  project_id: 0,
  asset_url: "",
};