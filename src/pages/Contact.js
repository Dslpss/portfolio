import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact section">
      <div className="container">
        <h1>Entre em Contato</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Informações de Contato</h2>
            <p><i className="fas fa-envelope"></i> seu-email@exemplo.com</p>
            <p><i className="fas fa-phone"></i> (00) 12345-6789</p>
            <p><i className="fas fa-map-marker-alt"></i> São Paulo, SP</p>
            <div className="social-links">
              <a 
                href="https://linkedin.com/in/seu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://github.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://twitter.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensagem" required></textarea>
            <button type="submit" className="btn">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
