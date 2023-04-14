import ProjectDetailsBio from "@/components/projects/ProjectDetailsBio";
import ProjectDetailsHero from "@/components/projects/ProjectDetailsHero";
import ProjectDetailsInfo from "@/components/projects/ProjectDetailsInfo";
import Header from "@/components/shared/Header";
import LazyShow from "@/components/shared/LazyShow";
import { ArchiveSpinner } from "@/components/shared/Utils";
import { useAssets, useProject } from "@/hooks/useProjects";
import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function ProjectDetails() {

  const { project, isLoading: isLoadingProject, error: projectError } = useProject();

  const { assets, isLoading: isLoadingAssets, error: assetsError } = useAssets();

  return (
    <>
      <Header>
      </Header>

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