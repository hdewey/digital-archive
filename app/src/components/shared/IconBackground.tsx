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
        backgroundSize={'contain'}
        backgroundImage={'/assets/other/background.png'}
      >
      </Box>

      {/* <Box 
        height={'80vh'}
        width={'100vw'} 
        backgroundSize={'cover'}
        transform={'scaleX(-1)'}

        backgroundImage={'/assets/other/background.png'}
      >
      </Box>

      <Box 
        height={'80vh'}
        width={'100vw'} 
        backgroundSize={'contain'}
        backgroundImage={'/assets/other/background.png'}
      >
      </Box> */}
    </Box>
  </>
  )
};

export default IconBackground;

// export {};