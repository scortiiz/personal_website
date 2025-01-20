import Card from "../cards/cards";

const Projects = ({ projects }) => {
  return (
    <div>
      <h1 className="headers">Projects</h1>
      <section id="projects" className="home">
        {projects && projects.length > 0 ? (
          projects.map((data, index) => (
            <Card
              key={index}
              title={data.fields.Name}
              value={data.fields.Notes}
              type={data.fields.Type}
              imageURL={data.fields.Pics[0]?.url}
            />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </section>
    </div>
  );
};

export default Projects;
