'use client';
import { useState } from 'react';
import Card from "../cards/cards";
import Modal from "../modal/modal";

const Projects = ({ projects }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (data) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div>
      <h1 className="headers">Projects</h1>
      <div className="cards-container">
        <section id="projects" className="home">
          {projects && projects.length > 0 ? (
            projects.map((data, index) => (
              <Card
                key={index}
                title={data.fields.Name}
                value={data.fields.Notes}
                type={data.fields.Type}
                imageURL={data.fields.Pics[0]?.url}
                data={data}
                onClick={handleCardClick}
              />
            ))
          ) : (
            <p>No projects available</p>
          )}
        </section>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        data={selectedCard}
      />
    </div>
  );
};

export default Projects;
