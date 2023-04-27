import { useAssets } from "@/hooks/useProjects";
import { byteaToBase64 } from "@/utils/etc";
import { Asset } from "@/utils/types";
import { Box, Center, Spinner, Image } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { ArchiveSpinner } from "../shared/Utils";

const ProjectDetailsHero = ({ imageSrc }: { imageSrc: string | undefined }) => {

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
          <Spinner boxSize={100} color={'brand.500'} />
        )}
        
        {
          imageSrc && (
            <Image
              src={imageSrc}
              maxW="100%"
              maxH="100%"
              objectFit="contain"
              position="absolute"
              alt={"final_product"}
            />
          )
        }
    </Box>
    </>
  )
}

export default ProjectDetailsHero;
