import { useAssets } from "@/hooks/useProjects";
import { Row } from "@/lib/chakraUtils";
import { byteaToBase64 } from "@/utils/etc";
import { Asset } from "@/utils/types";
import { Box, Text, Center, Heading, Image, Spinner } from "@chakra-ui/react";
import { ReactNode, useEffect, useMemo, useState } from "react";

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
    <Box height="60vh" width="100%" position={'relative'}>
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
  );
};


const AssetCarouselWrapper = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center" alignItems="center">
      <AssetCarousel />
    </Box>
  )
}

export default AssetCarouselWrapper;

const Card = ( props: { cardIndex: number, focusedIndex: number, asset?: Asset }) => {

  const [image, setImage] = useState<string | null>(null);

  const distance = props.cardIndex - props.focusedIndex;

  const isCenter = distance === 0;

  const transitionDuration = 0.11; 

  const cardStyles = {
    background: 'white.500',
    border: '3px solid rgba(255, 255, 255, 0.13)',
    borderRadius: '20px',
    display: Math.abs(distance) > 2 ? 'none' : 'unset',
    width: isCenter ? '60vw' : `${60 - Math.abs(distance) * 10}vw`,
    height: isCenter ? '50vh' : `${50 - Math.abs(distance) * 10}vh`,
    top: isCenter ? '0vh' : `${Math.abs(distance) * 5}vh`,
    left: !isCenter && distance < 0 ? `${20 - Math.abs(distance) * 4}vw` : isCenter ? '20vw' : 'unset',
    right: !isCenter && distance > 0 ? `${20 - Math.abs(distance) * 4}vw` : isCenter ? '20vw' : 'unset',
    zIndex: 999 - Math.abs(distance),
    opacity: !isCenter ? 1 - (Math.abs(distance) * 25) / 100 : '1',
    transition: `opacity ${transitionDuration}s ease-in-out, left ${transitionDuration}s ease-in-out, right ${transitionDuration}s ease-in-out`
  };

  useMemo(() => {
    if (props.asset && props.asset.data && props.asset.type === 'jpg') {

      const base64Image = byteaToBase64(props.asset.data.data);
      setImage(base64Image);
    }
  }, [ props.asset ])

  if ( Math.abs(props.cardIndex - props.focusedIndex) > 2) {
    return <></>;
  }

  return (
    <Box
      bg={'white.500'}
      position={'absolute'}
      // border={'1px black solid'}
      style={cardStyles}
    >
      <Center w={'100%'} h={'100%'} >
        {
          props.asset && isCenter ? (
            image && 
              <Image 
                maxWidth={'100%'}
                maxHeight={'100%'}
                src={image}
                alt="Converted Image" 
                borderRadius={'30px'}
                p={5}
              />
          ): (
            <Heading userSelect={'none'} color={'blackAlpha.200'} fontSize={'70px'}>{props.cardIndex}</Heading>
          )
        }
      </Center>
    </Box>
  )
}