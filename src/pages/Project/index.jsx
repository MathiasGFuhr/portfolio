import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import projectsData from '../../data/projects.json'; // Caminho correto do JSON
import './Project.css';

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="project-container">
      <h1 className="header">Meus Projetos</h1>
      <div className="project-list">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <img src={project.images[0]} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              <IoClose size={24} />
            </button>
            <h2>{selectedProject.name} - Detalhes</h2>
            <p><strong>Descrição:</strong> {selectedProject.description}</p>
            <p><strong>Tecnologias Usadas:</strong> {selectedProject.technologies.join(', ')}</p>
            <div className="modal-images">
              {selectedProject.images.map((image, index) => (
                <img key={index} src={image} alt={`imagem-${index}`} />
              ))}
            </div>
            <div className="modal-buttons">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn">Ver no GitHub</a>
              <a href={selectedProject.deploy} target="_blank" rel="noopener noreferrer" className="btn">Ver Deploy</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
