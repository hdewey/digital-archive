import { Column } from "@/lib/chakraUtils"
import { Heading, Text } from "@chakra-ui/react"

// TODO

const Footer = () => {
  return (
    <>
      <Column
        mainAxisAlignment={'center'}
        crossAxisAlignment={'center'}
        width={'100vw'}
        mt={'5vh'}
        height={'10vh'}
        bg={'brand.500'}
        zIndex={999}
      >
        <Heading color={'black.500'}>footer</Heading>
      </Column>
    </>
  )
}

export default Footer;