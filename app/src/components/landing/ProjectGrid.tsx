import { Box, Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";
import { useMemo, useState } from "react";

const ProjectGrid = () => {

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
          return (
            <ProjectItem key={index} rows={dims[1]} columns={dims[0]} projectID={index} />
          )
        })}
      </Grid>
    </>
  )
};

const ProjectItem = (props: {rows: number, columns: number, projectID: number}) => {

  const [ hover, toggleHover ] = useState(false);
  const [ bgColor, setBgColor ] = useState('white.500');

  useMemo(() => {
    if (hover) setBgColor('brand.500');
    else (setBgColor('white.500'));
  }, [ hover ])

  return (
    <>
      <GridItem colSpan={props.columns} rowSpan={props.rows} bg={bgColor} onMouseEnter={() => toggleHover(true)} onMouseOut={() => toggleHover(false)}>
        <Link href={`/projects/${props.projectID}`}>
          <Box w={'100%'} h={'100%'}></Box>
        </Link>

      </GridItem>
    </>
  )
}

export default ProjectGrid;