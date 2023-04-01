import Header from "@/components/shared/Header";
import IconBackground from "@/components/shared/IconBackground";

function ProjectDetails() {

  return (
    <>
      <Header />

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

export default ProjectDetails;