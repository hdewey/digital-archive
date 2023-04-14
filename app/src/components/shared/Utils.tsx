import { Center, Spinner } from "@chakra-ui/react"


export const ArchiveSpinner = ({ boxSize = 25 }: { boxSize?: number }) => {
  return (
    <Center w={'100%'} h={'100%'}>
      <Spinner boxSize={boxSize} color={'black.500'} />
    </Center>
  )
}