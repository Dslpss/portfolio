import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--cor-primaria);
  margin-bottom: 2rem;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <Container>
      <Title>Sobre Mim</Title>
      <Content>
        <p>
          Olá! Sou um desenvolvedor full stack apaixonado por criar soluções web inovadoras e intuitivas.
          Com experiência em diversas tecnologias modernas, estou sempre em busca de novos desafios e oportunidades para aprender.
        </p>
        <p>
          Minha jornada no mundo da programação começou há X anos, e desde então tenho trabalhado em projetos diversos,
          desde aplicações web complexas até sistemas de gerenciamento empresarial.
        </p>
        <p>
          Além do desenvolvimento, sou entusiasta de UI/UX e acredito que a combinação de código eficiente com design 
          intuitivo é a chave para criar experiências digitais excepcionais.
        </p>
      </Content>
    </Container>
  );
};

export default About;
