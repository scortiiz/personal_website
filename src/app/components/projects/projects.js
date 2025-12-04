'use client';
import { useState } from 'react';
import Card from "../cards/cards";
import Modal from "../modal/modal";

const Projects = ({ projects }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (data, index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const handleNavigate = (newIndex) => {
    setSelectedIndex(newIndex);
  };

  const currentData = selectedIndex !== null && projects ? projects[selectedIndex] : null;

  return (
    <div>
      <h1 className="headers">Organizations and Impact</h1>
      <div className="cards-container">
        <section id="projects" className="home">
          {projects && projects.length > 0 ? (
            projects.map((data, index) => (
              <Card
                key={index}
                title={data.fields?.Name || "Untitled"}
                value={data.fields?.Notes || "No details available"}
                type={data.fields?.Type || "General"}
                imageURL={data.fields?.Pics?.[0]?.url || "/placeholder.png"}
                data={data}
                onClick={() => handleCardClick(data, index)}
              />
            ))
          ) : (
            <p>No organizations and impact available</p>
          )}
        </section>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        data={currentData}
        allItems={projects}
        currentIndex={selectedIndex}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default Projects;
