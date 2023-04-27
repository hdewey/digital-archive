import { Column, Row } from "@/lib/chakraUtils";
import { Project } from "@/utils/types";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ProjectDetailsBio = ({ project }: { project: Project | undefined} ) => {

  return (
    <>
      <Column
        mainAxisAlignment={'center'}
        crossAxisAlignment={'center'}
        width={'100%'}
        bgColor={'black.500'}
        userSelect={'none'}
        my={12}
      >

        <Row
          mainAxisAlignment={'space-around'}
          crossAxisAlignment={'center'}
          width={'80vw'}
        >

          <Box
            width={'120px'}
            height={'120px'}
            bgColor={'white.500'}
            borderRadius={'100%'}
          >
          
            <Image 
              height={'120px'} 
              borderRadius={'100%'} 
              alt='avatar' 
              src={project?.profile_picture ? project.profile_picture : '/assets/avatars/default_avatar.png'} 
            />
          
          </Box>

          <Stack spacing={3}
            width={'80%'}
          >
            <HStack>
              <Heading color={'brand.500'} fontSize={42}>{project?.student_name}</Heading>
              <Text color={'gray.500'} fontSize={18} pt={4}>{project?.student_year}</Text>
            </HStack>

            <Text color={'white.500'} fontSize={18} noOfLines={4} width={'60%'}>
              {project?.mindset}
            </Text>
          </Stack>

        </Row>
        
      </Column>
    
    </>
  )
}

export default ProjectDetailsBio;