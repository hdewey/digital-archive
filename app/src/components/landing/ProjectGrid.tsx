import { useProject, useProjects } from "@/hooks/useProjects";
import { Project } from "@/utils/types";
import { Box, Center, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import LazyShow from "@/components/shared/LazyShow";

const ProjectGrid = () => {

  const { projects, isLoading, error } = useProjects();

  const loaded_projects = projects ?? [];

  // dims for each project, grid dims are specified in templateRows and templateColumns below
  const dimensions = [
    [3, 3],
    [6, 1],
    [3, 2],
    [2, 2],
    [4, 1],
    [7, 1]
  ]

  return (
    <>
      <Grid
        height={'75vh'}
        width={'90vw'}
        mb={10}

        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(12, 1fr)'
        gap={4}
        zIndex={1}
      >
        {
        dimensions.map((dims, index) => {
          let box_project = null;
          if (loaded_projects && loaded_projects[index]) {
            box_project = loaded_projects[index];
          } else {
            box_project = null;
          }
          
          return (
            <ProjectItem key={index} rows={dims[1]} columns={dims[0]} project={box_project} />
          )
        })}
      </Grid>
    </>
  )
};

export default ProjectGrid;

const ProjectItem = (props: {rows: number, columns: number, project: Project | null}) => {

  return (
    <>
      <GridItem colSpan={props.columns} rowSpan={props.rows} >
        <LazyShow grid>
          <Center
            h={'100%'}
            w={'100%'}
            borderRadius={'20px'}
            p={4}
            _hover={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.13) 100%)',
              backdropFilter: 'blur(5px)',
              border: '3px solid rgba(255, 255, 255, 0.13)',
            }}
          >
            <Box
              bg={'white.500'}
              borderRadius={'10px'}
              width={'100%'}
              height={'100%'}
            >
              {
                !props.project && (
                  <Box w={'100%'} h={'100%'}>
                    <Center w={'100%'} h={'100%'}>
                      <Heading color={'black.500'}>{ 'Project N' }</Heading>
                      {/* <Image boxSize={'80px'} src={'/assets/icons/iya/writing.png'} /> */}
                    </Center>
                  </Box>
                )
              }
              {
                props.project && (
                  <Link href={`/projects/${props.project.id}`}>
                    <Box w={'100%'} h={'100%'}>
                      <Center w={'100%'} h={'100%'}>
                        <Heading color={'black.500'} textAlign={'center'}>{ props.project.name }</Heading>
                        {/* <Image boxSize={'80px'} src={'/assets/icons/iya/writing.png'} /> */}
                      </Center>
                    </Box>
                  </Link>
                )
              }
            </Box>
          </Center>
        </LazyShow>
      </GridItem>
    </>
  )
}
