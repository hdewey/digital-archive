
import ProjectDetails from "@/components/projects/ProjectDetails";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import { ArchiveSpinner } from "@/components/shared/Utils";

function ProjectDetailsPage() {

  return (
    <>
      <Header />

      <ProjectDetails />

      <Footer />
    </>
  );
}

export default ProjectDetailsPage;