import React from 'react';
import './Loading.css';
import VetorLoading from '../imagem/VectorLoading.png';
// import BGAZUL from '../imagem/BGAZUL.png';

class Loading extends React.Component {
  render() {
    return (
      <div>
        {/* <img src={ BGAZUL } alt="fundo azul" className="fundoAzul" /> */}
        <div className="info">
          <img src={ VetorLoading } alt="VetorLoading" />
          <p>Carregando...</p>
        </div>
      </div>
    );
  }
}

export default Loading;
