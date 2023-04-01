import { Box, Image } from "@chakra-ui/react";

const IconBackground = () => {

  return (
  <>
    <Box 
      position={'absolute'} 
      overflow={'hidden'}
      mt={'20vh'}

      >
      <Box 
        height={'80vh'} 
        width={'100vw'} 
        backgroundSize={'cover'}

        backgroundImage={'/assets/other/background.png'}
      >
      </Box>
    </Box>
  </>
  )
};

export default IconBackground;