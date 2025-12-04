'use client';
import { useState } from 'react';
import Card from "../cards/cards";
import Modal from "../modal/modal";

const Experience = ({ experience }) => {
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
      <h1 className="headers">Experience</h1>
      <div className="cards-container">
        <section id="experience" className="home">
          {experience && experience.length > 0 ? (
            experience.map((data, index) => (
              <Card
                key={index}
                title={data.fields.Name || "Untitled"}
                value={data.fields.Notes || "No details available"}
                type={data.fields.Type || "General"}
                imageURL={data.fields.Pics?.[0]?.url || "/placeholder.png"}
                data={data}
                onClick={handleCardClick}
              />
            ))
          ) : (
            <p>No experience available</p>
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

export default Experience;

