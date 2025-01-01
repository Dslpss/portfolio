import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: 'E-commerce React', description: 'Uma plataforma de comércio eletrônico completa construída com React e Node.js.', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'App de Tarefas', description: 'Um aplicativo de gerenciamento de tarefas com React Native e Firebase.', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Blog Tech', description: 'Um blog sobre tecnologia desenvolvido com Next.js e Markdown.', image: 'https://via.placeholder.com/300x200' },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <article key={project.id} className="project-card">
              <img src={project.image} alt={`Imagem do projeto ${project.title}`} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={`/projeto/${project.id}`} className="btn">Ver Projeto</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
