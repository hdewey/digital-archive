import { useProject, useProjects } from "@/hooks/useProjects";
import { Project } from "@/utils/types";
import { Box, Center, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useMemo, useState } from "react";

const ProjectGrid = () => {

  const { projects, isLoading, error } = useProjects();

  const loaded_projects = projects ?? [];

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
        mt={10}
        height={'75vh'}
        width={'90vw'}
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(12, 1fr)'
        gap={10}
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

const ProjectItem = (props: {rows: number, columns: number, project: Project | null}) => {

  return (
    <>
      <GridItem colSpan={props.columns} rowSpan={props.rows} bg={'white.500'} _hover={{ bg: 'brand.500' }} >

        {
          props.project && (
            <Link href={`/projects/${props.project.id}`}>
              <Box w={'100%'} h={'100%'}>
                <Center w={'100%'} h={'100%'}>
                   <Heading color={'black.500'}>{ props.project.name }</Heading>
                  {/* <Image boxSize={'80px'} src={'/assets/icons/iya/writing.png'} /> */}
                </Center>
              </Box>
            </Link>
          )
        }
      </GridItem>
    </>
  )
}

export default ProjectGrid;