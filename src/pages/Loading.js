import React from 'react';
import './Loading.css';
import loading from '../images/loading.png';

class Loading extends React.Component {
  render() {
    return (
      <div className="bodyLoading">
        <img src={ loading } alt="logo" className="imgLoading" />
        <p className="loading">Carregando...</p>
      </div>
    );
  }
}

export default Loading;
