import React from 'react';
import { Container } from './styles';

function News() {
  return (
    <Container>
      <span>Assuntos do Momento</span>
      <strong>
        {/* <a href= target="_blank" rel="noreferrer">
          
        </a> */}
      </strong>
      <span>Outros Projetos do Desenvolvedor</span>
      <strong>
        <a
          href="https://frontendlogin.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Aplicação de Login
        </a>
      </strong>
      <strong>
        <a
          href="https://code-post-front-end.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Aplicação de Crud de Posts
        </a>
      </strong>
    </Container>
  );
}

export default News;
