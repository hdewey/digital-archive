import ProjectGrid from "@/components/landing/ProjectGrid";
import Header from "@/components/shared/Header";
import IconBackground from "@/components/shared/IconBackground";
import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useProjects } from "../hooks/useProjects";

const PAGE_SIZE = 10;

function ProjectsList() {
  // const [currentPage, setCurrentPage] = useState(1);
  // // const [projects, isLoadingProjects, errorProjects] = useProjects();

  // const paginatedProjects = Array.isArray(projects) && projects?.slice(
  //   (currentPage - 1) * PAGE_SIZE,
  //   currentPage * PAGE_SIZE
  // );

  return (
    <>
      <IconBackground />

      <Header />

      <ProjectGrid />

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