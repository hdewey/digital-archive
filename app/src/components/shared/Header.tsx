import { Column, Row } from "@/lib/chakraUtils";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode, useState } from "react";

const Header = () => {
  return (
    <>
      <Row
        // container row
        mainAxisAlignment={'center'}
        crossAxisAlignment={'center'}
        width={'100vw'}
        
        zIndex={1}
        my={[5]}
        mt={[null, null, '20px', '20px', null]}
      >
        <Row 
          mainAxisAlignment={'space-between'}
          crossAxisAlignment={'center'}
          width={{ base: '90vw', xl: '80vw'}}
        >
          <Column
            mainAxisAlignment={'flex-start'}
            crossAxisAlignment={'flex-start'}
            width={['50%', '80%', '80%', '80%', '50%']}
          >
            <Row
              mainAxisAlignment={'space-between'}
              crossAxisAlignment={'flex-end'}
              width={{ base: '70%', xl: '68%'}}
            > 
              <USCImage />
              
              <Column
                mainAxisAlignment={'center'}
                crossAxisAlignment={'center'}
                height={'100%'}
              >
                <Text textAlign={'right'} color={'white'} p={'0'} lineHeight={'22px'} my={0} mb={1} fontSize={'22px'}>{'Academy Projects'}</Text>

              </Column>
            </Row>
            <Box m={0} p={0} height={'95px'}>
              <Link href="/">
                <Heading
                  textShadow="2.83482px 2.83482px 9.92188px rgba(0, 0, 0, 0.25)"
                  fontSize={"90.7px"}
                  color="#F0C433"
                  textDecoration={'none'}
                  lineHeight={'91px'}
                  my={0}
                >
                  {"Exhibiting IYA".toUpperCase()}
                </Heading>
              </Link>
            </Box>
          </Column>
        </Row>
      </Row>
    </>
  )
};

export default Header;


const USCImage = () => {
  const uscLogo = '/assets/brand/usc-tag.png';

  return (
    <>
    {/* <Link target={'_blank'} href={'https://iovine-young.usc.edu/'}> */}
      <Box width={'160px'} maxH={'160px'} > 
        <Image src={uscLogo} width={'160px'} alt='USC IYA' />
      </Box>
    {/* </Link> */}
    </>
  );
};