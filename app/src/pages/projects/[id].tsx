import ProjectDetailsBio from "@/components/projects/ProjectDetailsBio";
import ProjectDetailsHero from "@/components/projects/ProjectDetailsHero";
import Header from "@/components/shared/Header";
import IconBackground from "@/components/shared/IconBackground";
import { useProject } from "@/hooks/useProjects";
import { Project } from "@/utils/types";
import { useEffect } from "react";

function ProjectDetails() {

  const { project, isLoading: isLoadingProject, error: projectError } = useProject();

  return (
    <>
      <Header />

      <ProjectDetailsHero />

      <ProjectDetailsBio project={project} />
    </>
  );
}

export default ProjectDetails;