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
              width={{ base: '76%', xl: '68%'}}
            > 
              <USCImage />
              
              <Text textAlign={'right'} color={'white'} fontSize={'22px'}>{'Academy Projects'}</Text>
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
    <Link target={'_blank'} href={'https://iovine-young.usc.edu/'}>
      <Box width={'160px'} maxH={'160px'} > 
        <Image src={uscLogo} width={'160px'} alt='USC IYA' />
      </Box>
    </Link>
    </>
  );
};

// import { Box, Heading, Text, Image } from "@chakra-ui/react";
// import Link from "next/link";

// const Header = () => {
//   const uscLogo = "/assets/brand/usc-tag.png";

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       width="100vw"
//       mt={5}
//       mb={10}
//     >
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         flexDirection="column"
//         width="80vw"
//         maxWidth="1400px"
//       >
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           width="100%"
//         >
//           <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             width="30%"
//           >
//             <Box width={{ base: "80px", lg: "160px" }}>
//               <Link target="_blank" href="https://iovine-young.usc.edu/">
//                 <Image src={uscLogo} alt="USC IYA" width="100%" height="auto" />
//               </Link>
//             </Box>
//             <Text color="white" fontSize={{ base: "18px", lg: "22px" }}>
//               Academy Projects
//             </Text>
//           </Box>
          
//         </Box>
//         <Box width="100%" display={{ base: "flex", lg: "block" }}>
//           <Box display="flex" alignItems="flex-end" width={{ base: "100%", lg: "auto" }}>
//             <Link href={"/"}>
//             <Heading
//               textShadow="2.83482px 2.83482px 9.92188px rgba(0, 0, 0, 0.25)"
//               fontSize={{ base: "40px", lg: "90.7px" }}
//               lineHeight={{ base: "50px", lg: "91px" }}
//               color="#F0C433"
//               textDecoration="none"
//               width={{ base: "100%", lg: "auto" }}
//               my={0}
//               mb={{ base: 4, lg: 0 }}
//             >
//               {"Exhibiting IYA".toUpperCase()}
//             </Heading>
//             </Link>

//           </Box>
//         </Box>
       
//     </Box>
//   </Box>
// );
// };

// export default Header