// custom components
import ProjectGrid from "@/components/landing/ProjectGrid";
import NewProjectGrid from "@/components/landing/NewProjectGrid";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";


const ProjectsListPage = () => {
  return (
    <>
      <Header />
      <NewProjectGrid />
      <Footer />
    </>
  );
}

export default ProjectsListPage;
