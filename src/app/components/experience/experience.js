import Card from "../cards/cards";

const Experience = ({ experience }) => {
  return (
    <div>
      <h1 className="headers">Experience</h1>
      <section id="experience" className="home">
        {experience && experience.length > 0 ? (
          experience.map((data, index) => (
            <Card
              key={index}
              title={data.fields.Name || "Untitled"}
              value={data.fields.Notes || "No details available"}
              type={data.fields.Type || "General"}
              imageURL={data.fields.Pics?.[0]?.url || "/placeholder.png"}
            />
          ))
        ) : (
          <p>No experience available</p>
        )}
      </section>
    </div>
  );
};

export default Experience;

