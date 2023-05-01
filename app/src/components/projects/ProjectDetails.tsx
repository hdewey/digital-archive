import ProjectDetailsBio from "@/components/projects/ProjectDetailsBio";
import ProjectDetailsHero from "@/components/projects/ProjectDetailsHero";
import ProjectDetailsInfo from "@/components/projects/ProjectDetailsInfo";

// import { ArchiveSpinner } from "@/components/shared/Utils";
import { useAssets, useProject } from "@/hooks/useProjects";
import { Center, Spinner } from "@chakra-ui/react";

function ProjectDetails() {

  const { project, isLoading: isLoadingProject, error: projectError } = useProject();

  const { assets, isLoading: isLoadingAssets, error: assetsError } = useAssets();

  return (
    <>
      
      {
        project && assets ? (
          <>
            <ProjectDetailsHero imageSrc={project.final_product}  />

            <ProjectDetailsInfo project={project} />

            <ProjectDetailsBio project={project} />
          </>
        ) 
        :
          <Center h={'80vh'} w={'80vw'}>
            <Spinner boxSize={100} color={'brand.500'} />
          </Center>
      }
    </>
  );
}

export default ProjectDetails;