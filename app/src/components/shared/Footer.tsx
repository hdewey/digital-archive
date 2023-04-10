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
        height={'5vh'}
        bg={'brand.500'}
        zIndex={999}
      >
      </Column>
    </>
  )
}

export default Footer;