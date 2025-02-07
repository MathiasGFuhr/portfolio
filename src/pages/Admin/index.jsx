import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, deleteDoc, doc, updateDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectTechnologies, setProjectTechnologies] = useState('');
  const [projectImages, setProjectImages] = useState('');
  const [projectGithub, setProjectGithub] = useState('');
  const [projectDeploy, setProjectDeploy] = useState('');
  const [editing, setEditing] = useState(null); // Para identificar se estamos editando um projeto
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Função para carregar os projetos
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsList);
    } catch (err) {
      console.error('Erro ao carregar os projetos:', err);
    }
  };

  // Carregar projetos do Firestore no início
  useEffect(() => {
    fetchProjects();
  }, []);

  // Adicionar ou editar projeto
  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const technologiesArray = projectTechnologies.split(',').map((tech) => tech.trim());
      const imagesArray = projectImages.split(',').map((image) => image.trim());

      const newProject = {
        name: projectName,
        description: projectDescription,
        technologies: technologiesArray,
        images: imagesArray,
        github: projectGithub,
        deploy: projectDeploy,
      };

      if (editing) {
        // Editar projeto
        const projectRef = doc(db, 'projects', editing.id);
        await updateDoc(projectRef, newProject);
        setSuccess('Projeto editado com sucesso!');
      } else {
        // Adicionar novo projeto
        await addDoc(collection(db, 'projects'), newProject);
        setSuccess('Projeto cadastrado com sucesso!');
      }

      setProjectName('');
      setProjectDescription('');
      setProjectTechnologies('');
      setProjectImages('');
      setProjectGithub('');
      setProjectDeploy('');
      setError('');
      setEditing(null);

      // Recarregar os projetos
      fetchProjects();

    } catch (err) {
      setError('Erro ao salvar o projeto. Tente novamente.');
      setSuccess('');
    }
  };

  // Excluir projeto
  const handleDeleteProject = async (id) => {
    try {
      const projectRef = doc(db, 'projects', id);
      await deleteDoc(projectRef);
      setSuccess('Projeto excluído com sucesso!');
      alert('Projeto excluído com sucesso!');

      // Recarregar a lista de projetos
      fetchProjects();
    } catch (err) {
      console.error('Erro ao excluir o projeto:', err);
      setError('Erro ao excluir o projeto. Tente novamente.');
    }
  };

  // Editar projeto
  const handleEditProject = (project) => {
    setProjectName(project.name);
    setProjectDescription(project.description);
    setProjectTechnologies(project.technologies.join(', '));
    setProjectImages(project.images.join(', '));
    setProjectGithub(project.github);
    setProjectDeploy(project.deploy);
    setEditing(project);
  };

  return (
    <div className="admin-container">
      <h2>Área de Administração</h2>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <form onSubmit={handleAddProject}>
        <div>
          <label htmlFor="name">Nome do Projeto:</label>
          <input
            type="text"
            id="name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="technologies">Tecnologias (separadas por vírgula):</label>
          <input
            type="text"
            id="technologies"
            value={projectTechnologies}
            onChange={(e) => setProjectTechnologies(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="images">Links das Imagens (separados por vírgula):</label>
          <input
            type="text"
            id="images"
            value={projectImages}
            onChange={(e) => setProjectImages(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="github">Link do GitHub:</label>
          <input
            type="url"
            id="github"
            value={projectGithub}
            onChange={(e) => setProjectGithub(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="deploy">Link do Deploy:</label>
          <input
            type="url"
            id="deploy"
            value={projectDeploy}
            onChange={(e) => setProjectDeploy(e.target.value)}
            required
          />
        </div>

        <button type="submit">{editing ? 'Salvar Alterações' : 'Adicionar Projeto'}</button>
      </form>

      <h3>Projetos Cadastrados</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <button onClick={() => handleEditProject(project)}>Editar</button>
            <button onClick={() => handleDeleteProject(project.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
