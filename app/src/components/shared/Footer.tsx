import { Column, Row } from "@/lib/chakraUtils"
import { Box, HStack, Heading, Link, Text, Image } from "@chakra-ui/react"

const Footer = () => {
  return (
    <>
      <Column
        mainAxisAlignment={'center'}
        crossAxisAlignment={'center'}
        width={'100vw'}
        zIndex={999}
        pb={5}
        bg={'#000000'}
      >
        <Row
          width={{ base: '90vw', xl: '80vw'}}
          mainAxisAlignment={'space-between'}
          crossAxisAlignment={'center'}
          mt={{ base: '10vh', xl: '8vh'}}
          zIndex={999}
          height={'15vh'}
        >
          <Text fontSize={{base: '14px', xl: '24px'}} color={'white.500'} width={{ base: '75%%', xl: '80%'}}>
            {"This archive was developed for the 2023 Exhibiting IYA Showcase."}
          </Text>
          <HStack>
            <USCImage />
            <Heading color={'brand.500'} fontSize={'32px'} pb={{ base: 1, xl: 0}} >{"EXHIBITING IYA".toUpperCase()}</Heading>
          </HStack>
        </Row>
      </Column>
    </>
  )
}

export default Footer;

const USCImage = () => {
  const uscLogo = '/assets/brand/usc-tag.png';

  return (
    <>
      <Box width={'100px'} maxH={'100px'} > 
        <Image src={uscLogo} width={'100px'} alt='USC IYA' />
      </Box>
    </>
  );
};