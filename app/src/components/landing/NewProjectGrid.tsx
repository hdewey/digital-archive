import { SimpleGrid, Box, Image, AspectRatio, Center, Spinner } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { shuffle } from "@/utils/etc";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Project } from "@/utils/types";
import { useProjects } from "@/hooks/useProjects";
import LazyShow from "../shared/LazyShow";
import Link from "next/link";

const ProjectGrid = () => {

  
  const { projects, isLoading, error } = useProjects();

  const [shuffledProjects, setShuffledProjects] = useState<null | Project[]>(null);

  useMemo(() => {
    if (!shuffledProjects && projects) {
      setShuffledProjects(shuffle(projects));
    }
  }, [projects, shuffledProjects]);

  const imageSizes = useBreakpointValue({
    base: ["1fr", "1fr", "2fr", "2fr"],
    sm: ["1fr", "2fr", "2fr", "1fr"],
    md: ["1fr", "1fr", "2fr", "2fr"],
    lg: ["1fr", "2fr", "2fr", "2fr", "1fr"],
  });

  const shuffledSizes = useMemo(() => shuffle(imageSizes), [imageSizes]);

  return (
    <>
      {
        shuffledProjects && shuffledSizes && <ImageGrid shuffledProjects={shuffledProjects} shuffledSizes={shuffledSizes} />
      }

      {
        isLoading && (
          <Center 
            width={'80vw'}
            height={'75vh'}
          >
            <Spinner boxSize={'100px'} color={'brand.500'} />
          </Center>
        )
      }
    </>
  )
}

export default ProjectGrid;

const ImageGrid = ({ shuffledProjects, shuffledSizes }: { shuffledProjects: Project[], shuffledSizes: string[]}) => {

  return (
    (
      shuffledProjects && (
        <LazyShow grid>
          <SimpleGrid columns={[2, 3, 4]} spacing={8} zIndex={999} minHeight={"75vh"} width={"80vw"}>
            {shuffledProjects.map((project, index) => {
              const size = shuffledSizes[index % shuffledSizes.length];
              const gridColumn = size === "2fr" ? "span 2" : "span 1";
              const gridRow = size === "2fr" ? "span 2" : "span 1";
              return (
                <Box
                  key={index}
                  gridColumn={gridColumn}
                  gridRow={gridRow}
                  boxShadow="lg"
                  borderRadius="md"
                  overflow="hidden"
                  position="relative"
                >
                  <Box
                    key={index}
                    gridColumn={gridColumn}
                    gridRow={gridRow}
                    boxShadow="lg"
                    borderRadius="md"
                    overflow="hidden"
                    position="relative"
                  >
                    <Link href={`/projects/${project.id}`}>
                      <Image
                        src={project.final_product}
                        alt={project.project_name}
                        objectFit="contain"
                        border="8px solid"
                        borderColor="#333332"
                        borderRadius="md"
                        boxSizing="border-box"
                        cursor={'url("/assets/icons/extra/pointer.png") 12 12, auto;'}
                        style={{ zoom: 0.5}}
                      />
                    </Link>
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>
        </LazyShow>
      )
    )
  );
};