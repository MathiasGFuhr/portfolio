import { useState, useEffect } from 'react';
import { db } from '../../firebase'; // Certifique-se de que o Firestore esteja configurado corretamente
import { collection, getDocs } from 'firebase/firestore';
import './Project.css';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsList = querySnapshot.docs.map(doc => doc.data());
      setProjects(projectsList);
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-container">
      <h1 className="header">Meus Projetos</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.images[0]} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="modal-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">Ver no GitHub</a>
              <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="btn">Ver Deploy</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
