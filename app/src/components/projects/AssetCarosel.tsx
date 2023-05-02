import { useAssets } from "@/hooks/useProjects";
import { Asset } from "@/utils/types";
import { Box, Text, Center, Heading, Image, Spinner, HStack, Icon } from "@chakra-ui/react";
import { useMemo, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

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
    assets && assets.length > 0 ? (
      <>
        <Box height="65vh" width="100%" position={'relative'}>
          {
            assets.map((card, index) => (
              // Card wrapper to handle changes
              <Box onClick={() => moveCenter(index)} key={index} >
                {
                  assets[index] && <Card cardIndex={index} focusedIndex={centerCard} asset={assets[index]} /> 
                }
              </Box>
            ))
          }
        </Box>
        <Row
          mainAxisAlignment={'center'}
          crossAxisAlignment={'center'}
          width={'100%'}
          height={'3vh'}
          mb={10}
        >
          <HStack>
            { assets && assets.length > 0 && (
              <>
                <ChevronLeftIcon boxSize={4} onClick={() => moveCenter(centerCard > 0 ? centerCard - 1 : centerCard)} />
                  { 
                    // dots
                    assets.map( (_asset, index) => ( 
                      <Box key={index} borderRadius={'100%'} bgColor={index == centerCard ? 'white.500' : 'gray.500'} boxSize={2}>
                      </Box>
                    ))
                  }
                <ChevronRightIcon boxSize={4} onClick={() => moveCenter(centerCard < assets.length - 1 ? centerCard + 1 : centerCard)} />
              </>
            )}
          </HStack>
        </Row>
      </>
    ) : <></>
  );
};


export default AssetCarousel;

const Card = ( props: { cardIndex: number, focusedIndex: number, asset?: Asset }) => {

  const distance = props.cardIndex - props.focusedIndex;

  const isCenter = distance === 0;

  const transitionDuration = 0.2; 

  const cardStyles = {
    background: 'black.500',
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

  if ( Math.abs(props.cardIndex - props.focusedIndex) > 1) {
    return <></>;
  }

  return (
    <Box
      bg={'black.500'}
      position={'absolute'}
      style={cardStyles}
      userSelect={'none'}
    >
      <Center w={'100%'} h={'100%'} >
        {
          props.asset ?
              <Image 
                maxWidth={'100%'}
                maxHeight={'100%'}
                src={props.asset?.asset_url}
                alt="Converted Image" 
                p={5}
              />
            : <Spinner boxSize={75} color={'brand.500'} />
        }
      </Center>
    </Box>
  )
}