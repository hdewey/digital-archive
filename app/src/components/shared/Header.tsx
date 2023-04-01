import { Column, Row } from "@/lib/chakraUtils";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const Header = () => {

  const filters = false;
  
  const uscLogo = '/assets/brand/usc-tag.png';


  return (
    <>
      <Row
        // container row
        mainAxisAlignment={'center'}
        crossAxisAlignment={'center'}
        width={'100vw'}
        height={'15vh'}
        mt={5}
        zIndex={1}
      >
        <Row 
          mainAxisAlignment={'space-between'}
          crossAxisAlignment={'center'}
          width={'90vw'}
        >
          <Column
            mainAxisAlignment={'flex-start'}
            crossAxisAlignment={'flex-start'}
            width={'100%'}
          >
            <Row
              mainAxisAlignment={'space-between'}
              crossAxisAlignment={'flex-end'}
              // width={'58.1%'}
              width={'470px'}
            >
              <Box boxSize={"125px"} height={"50px"} > 
                <Image src={uscLogo} alt='USC IYA' />
              </Box>
              <Box>
                <Text textAlign={'right'} color={'white'} fontSize={'22px'} >{'Academy Projects'}</Text>
              </Box>
            </Row>

            <Heading textShadow={'2.83482px 2.83482px 9.92188px rgba(0, 0, 0, 0.25)'} fontSize={"90.7px"} lineHeight={"85%"} color={'#F0C433'}>{'The Archives'.toUpperCase()}</Heading>
          </Column>

        <Box 
          // bg={'blue'}  
          width={'100%'} 
          height={'100%'}
        >
          <Row
            mainAxisAlignment={'center'}
            crossAxisAlignment={'center'}
          >
            <Heading color={'white'}>{'Filters...'.toUpperCase()}</Heading>
          </Row>
        </Box>

        </Row>
      </Row>
    </>
  )
};

export default Header;