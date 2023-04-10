import { useAssets } from "@/hooks/useProjects";
import { Column } from "@/lib/chakraUtils";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LazyShow from "../shared/LazyShow";
import AssetCarousel from "./AssetCarosel";

const ProjectDetailsHero = () => {

  const router = useRouter();
  // const { id } = router.query;

  // const { assets, isLoading, error } = useAssets();

  return (
    <>
      <Column
        mainAxisAlignment={'center'}
        crossAxisAlignment={'center'}
        width={'100%'}
        mb={10}
        userSelect={'none'}
      >

        <Box width={'100vw'}>
            <AssetCarousel />
        </Box>

        
      </Column>
    </>
  )
}

export default ProjectDetailsHero;