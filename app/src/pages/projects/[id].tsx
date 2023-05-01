
import ProjectDetails from "@/components/projects/ProjectDetails";
import BackButton from "@/components/shared/BackButton";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

import { ArchiveSpinner } from "@/components/shared/Utils";

function ProjectDetailsPage() {

  return (
    <>
      <Header />

      <BackButton />

      <ProjectDetails />

      <Footer />
    </>
  );
}

export default ProjectDetailsPage;