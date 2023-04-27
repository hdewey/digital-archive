// chakra components
import { Heading } from "@chakra-ui/react";

// custom components
import ProjectGrid from "@/components/landing/ProjectGrid";
import NewProjectGrid from "@/components/landing/NewProjectGrid";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import IconBackground from "@/components/shared/IconBackground";

const ProjectsListPage = () => {
  return (
    <>
      {/* <IconBackground /> */}
      <Header>
        <Heading color={'white'}>{'Filters...'.toUpperCase()}</Heading>
      </Header>
      {/* <ProjectGrid /> */}
      <NewProjectGrid />
      <Footer />
    </>
  );
}

export default ProjectsListPage;
