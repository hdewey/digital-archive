import { useState } from "react";

// chakra components
import { Box, Heading, Stack, Text } from "@chakra-ui/react";

// custom components
import ProjectGrid from "@/components/landing/ProjectGrid";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import IconBackground from "@/components/shared/IconBackground";


function ProjectsList() {
  const [ currentFrontEnd, setCurrentFrontEnd ] = useState(0);

  return (
    <>
      {
        currentFrontEnd === 0 && (
          <>
            <IconBackground />
            <Header>
              <Heading color={'white'}>{'Filters...'.toUpperCase()}</Heading>
            </Header>
            <ProjectGrid />
            <Footer />
          </>
        )
      }

      {
        currentFrontEnd === 1 && (
          <>
          </>
        )
      }

      {/* FrontEndToggles */}
      {/* <Stack
        position={'absolute'}
        top={'3vh'}
        right={'2vw'}
        zIndex={999}
      >
        {[1,2,3].map((_value, index) => {
          return (
            <Heading
              key={index}
              cursor={'pointer'}
              color={currentFrontEnd === index ? 'brand.500' : 'white.500'}
              textDecoration={ currentFrontEnd === index ? 'underline' : 'unset' }
              onClick={ () => setCurrentFrontEnd(index)}
            >
              {index}
            </Heading>
          )
        })}
      </Stack> */}

      {/* <Box zIndex={1}>
        {isLoadingProjects && <div>Loading projects...</div>}
        {errorProjects && <div>There was an error loading projects.</div>}
        {paginatedProjects && (
          <table color={'#fff'}>
            <thead>
              <tr>
                <th><Heading>ID</Heading></th>
                <th><Heading>Name</Heading></th>
                <th><Heading>Description</Heading></th>
                <th><Heading>Team Bio</Heading></th>
              </tr>
            </thead>
            <tbody>
              {paginatedProjects.map((project) => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>{project.team_bio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Box> */}
    </>
  );
}

export default ProjectsList;
