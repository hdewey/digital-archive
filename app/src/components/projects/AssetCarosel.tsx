import { useAssets } from "@/hooks/useProjects";
import { Asset } from "@/utils/types";
import { Box, Text, Center, Heading, Image, Spinner, HStack, Icon } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { byteaToBase64 } from "@/utils/etc";
import { Row } from "@/lib/chakraUtils";

const AssetCarousel = () => {

  const [ centerCard, setCenterCard ] = useState(0);

  const { assets, isLoading, error } = useAssets();

  // Move the focused card left or right
  const moveCenter = (cardIndex: number) => {
    if (cardIndex == centerCard) return;

    if (cardIndex - centerCard < 0) {
      setCenterCard(centerCard - 1);
    } else if (cardIndex - centerCard > 0) {
      setCenterCard(centerCard + 1); 
    }
  }

  return (
    <>
    <Box height="65vh" width="100%" position={'relative'}>
        {assets ? assets.map((card, index) => (

          // Card wrapper to handle changes
          <Box onClick={() => moveCenter(index)} key={index} >
            {
              assets[index] && <Card cardIndex={index} focusedIndex={centerCard} asset={assets[index]} /> 
            }
          </Box>
        ))
      : (
        <Center w={'100%'} h={'100%'}>
          <Spinner boxSize={'50px'} />
        </Center>
      )}
    </Box>
    
    <Row
      mainAxisAlignment={'center'}
      crossAxisAlignment={'center'}
      width={'100%'}
      height={'3vh'}
      mb={10}
    >
      <HStack>
        {/* <Icon as={Arrow} w={10} h={10} /> */}
        <ChevronLeftIcon boxSize={4} />
        {
          assets && assets.length && (
            Array(assets.length).fill(0).map((_val, index) => {
              return (
                <Box key={index} borderRadius={'100%'} bgColor={index == centerCard ? 'white.500' : 'gray.500'} boxSize={2}>

                </Box>
              )
            })
          )

        }
        <ChevronRightIcon boxSize={4} />
      </HStack>
    </Row>
    
    </>
  );
};


export default AssetCarousel;

const Card = ( props: { cardIndex: number, focusedIndex: number, asset?: Asset }) => {

  const [image, setImage] = useState<string | null>(null);

  const distance = props.cardIndex - props.focusedIndex;

  const isCenter = distance === 0;

  const transitionDuration = 0.2; 

  const cardStyles = {
    background: 'white.500',
    // border: '3px solid rgba(255, 255, 255, 0.13)',
    // borderRadius: '20px',
    display: Math.abs(distance) > 1 ? 'none' : 'unset',
    width: isCenter ? '55vw' : `${55 - Math.abs(distance) * 20}vw`,
    height: isCenter ? '60vh' : `${60 - Math.abs(distance) * 20}vh`,
    top: isCenter ? '0vh' : `${Math.abs(distance) * 10}vh`,
    left: !isCenter && distance < 0 ? `${15 - Math.abs(distance) * 8}vw` : isCenter ? '22.5vw' : 'unset',
    right: !isCenter && distance > 0 ? `${15 - Math.abs(distance) * 8}vw` : isCenter ? '22.5vw' : 'unset',
    zIndex: 999 - Math.abs(distance),
    opacity: !isCenter ? 1 - (Math.abs(distance) * 25) / 100 : '1',
    transition: `left ${transitionDuration}s ease-in-out, right ${transitionDuration}s ease-in-out`
  };

  useMemo(() => {
    if (props.asset && props.asset.data && props.asset.type === 'jpg') {

      const base64Image = byteaToBase64(props.asset.data.data);
      setImage(base64Image);
    }
  }, [ props.asset ])

  if ( Math.abs(props.cardIndex - props.focusedIndex) > 1) {
    return <></>;
  }

  return (
    <Box
      bg={'white.500'}
      position={'absolute'}
      // border={'1px black solid'}
      style={cardStyles}
      userSelect={'none'}
    >
      <Center w={'100%'} h={'100%'} >
        {
          props.asset ? (
            image ? 
              <Image 
                maxWidth={'100%'}
                maxHeight={'100%'}
                src={image}
                alt="Converted Image" 
                p={5}
              />
            : <Spinner boxSize={75} color={'black.500'} />
          ): (
            <Heading userSelect={'none'} color={'blackAlpha.200'} fontSize={'70px'}>{props.cardIndex}</Heading>
          )
        }
      </Center>
    </Box>
  )
}