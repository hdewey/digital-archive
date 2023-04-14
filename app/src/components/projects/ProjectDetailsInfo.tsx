// components/InfoSection.js
import { Column } from '@/lib/chakraUtils';
import { Asset, Project } from '@/utils/types';
import { Box, Heading, Stack, Text} from '@chakra-ui/react';
import { ReactNode } from 'react';
import AssetCarousel from './AssetCarosel';

const ProjectDetailsInfo = ({ project, assets }: { project: Project, assets: Asset[] }) => {

  return (
    <Box bgColor={'white.500'}>
      <Column
        mainAxisAlignment={'flex-start'}
        crossAxisAlignment={'center'}
        width={'100vw'}
        bgColor={'#000000'}
        borderTopRadius={40}
      >
        
        <ProjectInfo
          name={project.name}
          year={'2023'}
          teamName={project.team_name}
          className={'ACAD-X'}
          desc={project.description}
        />

        <ProjectProcess />

      </Column>
    </Box>

  );
};

export default ProjectDetailsInfo;


const ProjectInfo = ({ name, year, teamName, className, desc }: { name: string, year: string, teamName: string, className: string, desc: string}) => {
  return (
    <>
      <Stack
        width={'85%'}
        height={'100%'}
        mt={20}
        spacing={1}
      >
        <Heading fontSize={48} color={'white.500'} pb={2}>{name}</Heading>

        <Text 
          fontSize={24}
          color={'brand.500'}
        >{teamName}, {year}</Text>
        <Text fontSize={22} color={'gray.500'}>{className}</Text>

        <Text fontSize={22} color={'white.500'} pt={4}>
          {desc}
        </Text>

        <Heading fontSize={48}  pt={20}>The Process</Heading>
        

      </Stack>
    </>
  )
}

const ProjectProcess = () => {

  return (
    <>


      <AssetCarousel />
    </>
  )
}