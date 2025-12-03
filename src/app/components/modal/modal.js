'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import './modal.css';

const Modal = ({ isOpen, onClose, data }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  // Parse Info field - handle both string and array formats
  const getInfoPoints = () => {
    if (!data.fields?.Info) return [];
    
    if (Array.isArray(data.fields.Info)) {
      return data.fields.Info;
    }
    
    if (typeof data.fields.Info === 'string') {
      // Split by newlines or bullet points
      return data.fields.Info
        .split(/\n|•|\*|-\s+/)
        .map(point => point.trim())
        .filter(point => point.length > 0);
    }
    
    return [];
  };

  const infoPoints = getInfoPoints();
  const imageURL = data.fields?.Pics?.[0]?.url || data.imageURL;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className="modal-body">
          <div className="modal-left">
            <h2 className="modal-title">{data.fields?.Name || data.title || 'Details'}</h2>
            {infoPoints.length > 0 ? (
              <ul className="modal-info-list">
                {infoPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="modal-no-info">No additional information available.</p>
            )}
          </div>
          
          <div className="modal-right">
            {imageURL ? (
              <Image
                src={imageURL}
                alt={data.fields?.Name || data.title || 'Card image'}
                width={500}
                height={400}
                className="modal-image"
                priority
              />
            ) : (
              <div className="modal-image-placeholder">
                <p>No image available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

