import { Column, Row } from "@/lib/chakraUtils";
import { Project } from "@/utils/types";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ProjectDetailsBio = (props: {project: Project | undefined }) => {

  const [ avatarBin, setAvatarBin ] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (props.project?.profile_picture) {
      setAvatarBin(props.project.profile_picture);
    }
  }, [props.project] )

  return (
    <>

      <Column
        mainAxisAlignment={'center'}
        crossAxisAlignment={'center'}
        width={'100%'}
        height={'23vh'}
        bgColor={'black.500'}
        userSelect={'none'}
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
            {
              avatarBin ? 
                  <Image height={'120px'} borderRadius={'100%'} src={`data:image/*;base64,${avatarBin}`} />
                :
                  <Box width={'100%'} height={'100%'}></Box>
            }
          </Box>

          <Stack spacing={1}
            width={'80%'}
          >
            <Heading color={'brand.500'} fontSize={42}>{props.project?.team_name}</Heading>
            <Text color={'gray.500'} fontSize={18}>Cohort N</Text>
            <Text color={'white.500'} fontSize={16} noOfLines={4} width={'60%'}>
              {/* This project exemplifies the IYA mindset because it represents the messy, iterative process of product design and development. As innovative thinkers, we're often tasked to consider the user throughout our ideation processes, which drive the form and function of the projects we develop. */}
              {props.project?.team_bio}
            </Text>
          </Stack>

        </Row>
        
      </Column>
    
    </>
  )
}

export default ProjectDetailsBio;