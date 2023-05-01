// components/InfoSection.js
import { Column } from '@/lib/chakraUtils';
import { Asset, Project } from '@/utils/types';
import { Box, Heading, Stack, Text} from '@chakra-ui/react';
import AssetCarousel from './AssetCarosel';

import TextWithLineBreaks from '@/utils/textBreaks';

const ProjectDetailsInfo = ({ project }: { project: Project }) => {

  return (
    <Box bgColor={'black.600'}>
      <Column
        mainAxisAlignment={'flex-start'}
        crossAxisAlignment={'center'}
        width={'100vw'}
        bgColor={'#000000'}
        borderTopRadius={40}
      >
        
        <ProjectInfo
          name={project.project_name}
          year={project.semester_made}
          teamName={project.student_name}
          className={project.project_class}
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
        mt={10}
        spacing={1}
        mb={20}
      >
        <Heading fontSize={48} color={'white.500'} pb={2}>{name}</Heading>

        <Text 
          fontSize={24}
          color={'brand.500'}
          fontWeight={'bold'}
        >{teamName}, {year}</Text>
        <Text fontSize={22} color={'gray.500'}>{className}</Text>

        <Text fontSize={22} color={'white.500'} pt={4}>
          <TextWithLineBreaks text={desc as string} />
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