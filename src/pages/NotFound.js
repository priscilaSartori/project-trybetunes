import React from 'react';
import './NotFound.css';
import BGAZUL from '../imagem/BGAZUL.png';

class NotFound extends React.Component {
  render() {
    return (
      <div
        data-testid="page-not-found"
      >
        <img src={ BGAZUL } alt="fundo azul" className="fundoAzul" />
        <p className="ops">Ops!</p>
        <p className="frase">A página que você está procurando não foi encontrada.</p>
      </div>
    );
  }
}

export default NotFound;
