import {getExperience} from "../../lib/getTable";
import React from "react";

const Experience = () => {
    return (
        <div>
        <h1 className = "headers">Experience</h1>
      <section id="experience" className="home">
        {getExperience()}
      </section>
      </div>
    );
  };
  
  export default Experience;

