import { Column, Row } from "@/lib/chakraUtils";
import { Box, Heading, Text, Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode, useState } from "react";

const Header = ({children}: {children: ReactNode}) => {

  return (
    <>
      <Row
        // container row
        mainAxisAlignment={'center'}
        crossAxisAlignment={'center'}
        width={'100vw'}
        height={'15vh'}
        mt={5}
        mb={10}
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
              <USCImage />
          
              <Box>
                <Text textAlign={'right'} color={'white'} fontSize={'22px'} >{'Academy Projects'}</Text>
              </Box>
            </Row>
            <Link href={'/'}>
              <Heading textShadow={'2.83482px 2.83482px 9.92188px rgba(0, 0, 0, 0.25)'} fontSize={"90.7px"} lineHeight={"85%"} color={'#F0C433'}>{'The Archives'.toUpperCase()}</Heading>
            </Link>
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
            {
              children
            }          
          </Row>
        </Box>

        </Row>
      </Row>
    </>
  )
};

export default Header;

// const Dots = ( props: { isVisible: boolean }) => {
//   const prefersReducedMotion = usePrefersReducedMotion();
//   const spiral = keyframes`
//     from {
//       transform: rotate(0deg) translate(0, 0);
//     }
//     to {
//       transform: rotate(360deg) translate(80px) rotate(-720deg);
//     }
//   `;
//   return (
//     <Box
//       display={props.isVisible ? "block" : "none"}
//       position="absolute"
//       top={5}
//       left={5}
//       transform="translate(-50%, -50%)"
//       width="40px"
//       height="40px"
//       borderRadius="50%"
//       backgroundColor="white"
//       animation={!prefersReducedMotion ? `${spiral} 1s linear infinite` : 'unset'}
//       zIndex={999}
//     >
//     </Box>
//   );
// };

const USCImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const uscLogo = '/assets/brand/usc-tag.png';

  return (
    <>
    <Link target={'_blank'} href={'https://iovine-young.usc.edu/'}>
      <Box width={'160px'}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
        <Image src={uscLogo} alt='USC IYA' />
      </Box>
      {/* <Dots isVisible={isHovered} /> */}
    </Link>
    </>
  );
};