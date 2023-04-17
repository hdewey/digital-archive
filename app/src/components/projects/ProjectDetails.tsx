import ProjectDetailsBio from "@/components/projects/ProjectDetailsBio";
import ProjectDetailsHero from "@/components/projects/ProjectDetailsHero";
import ProjectDetailsInfo from "@/components/projects/ProjectDetailsInfo";

import { ArchiveSpinner } from "@/components/shared/Utils";
import { useAssets, useProject } from "@/hooks/useProjects";

function ProjectDetails() {

  const { project, isLoading: isLoadingProject, error: projectError } = useProject();

  const { assets, isLoading: isLoadingAssets, error: assetsError } = useAssets();

  return (
    <>
      <ProjectDetailsHero  />
      
      {
        project && assets ? (
          <>
            <ProjectDetailsInfo project={project} assets={assets} />

            <ProjectDetailsBio project={project} />
          </>
        ) 
        :
          <ArchiveSpinner />
      }
    </>
  );
}

export default ProjectDetails;