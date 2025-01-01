import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <h1>Desenvolvedor Web Full Stack</h1>
          <p>Criando experiências digitais incríveis</p>
          <Link to="/projetos" className="btn">Ver Projetos</Link>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <h2>Minhas Habilidades</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <i className="fas fa-code"></i>
              <h3>Front-end</h3>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-server"></i>
              <h3>Back-end</h3>
              <p>Node.js, Express, MongoDB</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-mobile-alt"></i>
              <h3>Mobile</h3>
              <p>React Native, Flutter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
