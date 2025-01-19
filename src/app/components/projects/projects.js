import React from "react";
import { getProjects } from "@/app/lib/getTable";

const Projects = () => {
    return (
        <div>
            <h1 className = "headers">Projects</h1>
      <section id="projects" className='home'>
        {getProjects()}
      </section>
      </div>
    );
  };
  
  export default Projects;
