import { Column, Row } from "@/lib/chakraUtils";
import { Project } from "@/utils/types";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ProjectDetailsBio = ({ project }: { project: Project | undefined} ) => {

  return (
    <>
      <Column
        mainAxisAlignment={'flex-start'}
        crossAxisAlignment={'center'}
        width={'100%'}
        py={{base: 10, xl: 20}}
      >

        <Row
          mainAxisAlignment={'center'}
          crossAxisAlignment={'flex-start'}
          width={'70vw'}
        >
          <Box
            width={'140px'}
            height={'140px'}
            borderRadius={'100%'}
            m={5}
          >
            <Image 
              height={'140px'} 
              borderRadius={'100%'} 
              alt='avatar' 
              src={project?.profile_picture ? project.profile_picture : '/assets/avatars/default_avatar.png'} 
            />
          </Box>
          <Stack 
            spacing={{base: 0, xl: 3}}
            width={'75%'}
            pt={5}
          >
            <HStack>
              <Heading color={'brand.500'} fontSize={42} py={1} m={0}>{project?.student_name}</Heading>
              <Text color={'gray.500'} fontSize={18} pt={4}>{project?.student_year}</Text>
            </HStack>

            <Text color={'white.500'} fontSize={18} p={0} m={0}>
              {project?.mindset}
            </Text>
          </Stack>

        </Row>
        
      </Column>
    
    </>
  )
}

export default ProjectDetailsBio;