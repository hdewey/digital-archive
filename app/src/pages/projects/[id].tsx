import ProjectDetailsBio from "@/components/projects/ProjectDetailsBio";
import ProjectDetailsHero from "@/components/projects/ProjectDetailsHero";
import Header from "@/components/shared/Header";
import LazyShow from "@/components/shared/LazyShow";
import { useProject } from "@/hooks/useProjects";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { useState } from "react";

function ProjectDetails() {

  const { project, isLoading: isLoadingProject, error: projectError } = useProject();

  const [ page, setPage ] = useState('product');

  const selectedStyle = {
    color: 'brand.500', 
    textDecoration: 'underlined'
  }

  const unselectedStyle = {
    color: 'white.500',
    textDecoration: 'none'
  }

  return (
    <>
      <Header>
        {/* <HStack width={'40%'}>
          <Box onClick={() => setPage('product')}>
            <Heading
              style={page === 'product' ? selectedStyle : unselectedStyle}
            >
              {'Product'}
            </Heading>
          </Box>
          <Box
            onClick={() => setPage('process')}
          >
            <Heading
              style={page === 'process' ? selectedStyle : unselectedStyle}
            >
              {'Process'}
            </Heading>
          </Box>

        </HStack> */}
      </Header>

      <LazyShow>
        <ProjectDetailsHero />
      </LazyShow>

      <LazyShow>
        <ProjectDetailsBio project={project} />
      </LazyShow>
    </>
  );
}

export default ProjectDetails;