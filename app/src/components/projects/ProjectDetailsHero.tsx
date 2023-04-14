import { useAssets } from "@/hooks/useProjects";
import { byteaToBase64 } from "@/utils/etc";
import { Asset } from "@/utils/types";
import { Box, Center, Spinner, Image } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { ArchiveSpinner } from "../shared/Utils";

const ProjectDetailsHero = () => {

  const { assets, isLoading, error } = useAssets();

  return (
    <>
      <Box
        w="100vw"
        h="70vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bgColor={'white.500'}
      >

        { isLoading && ( 
          <ArchiveSpinner />
        )}
        
        {
          assets && assets[0] && (
            <HeroContent asset={assets[0]} />
          )
        }
    </Box>
    </>
  )
}

export default ProjectDetailsHero;

const HeroContent = ({ asset }: { asset: Asset }) => {

  const [ imageUrl, setImageUrl ] = useState<string | undefined>(undefined);

  useMemo(() => {
    if (asset.data && asset.type === 'jpg') {
      const base64Image = byteaToBase64(asset.data.data);
      setImageUrl(base64Image);
    }
  }, [ asset ])

  return (
    <Image
      src={imageUrl}
      maxW="100%"
      maxH="100%"
      objectFit="contain"
      position="absolute"
    />
  )
}