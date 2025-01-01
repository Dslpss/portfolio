import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --cor-fundo: #0a192f;
    --cor-texto: #8892b0;
    --cor-primaria: #64ffda;
    --cor-destaque: #ff6b6b;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    line-height: 1.6;
  }

  a {
    color: var(--cor-primaria);
    text-decoration: none;
  }
`;

export default GlobalStyle;
