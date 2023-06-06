import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <div data-testid="page-not-found" className="bodyNotFound">
        <p className="NotFound">Ops... Produto não encontrado</p>
      </div>
    );
  }
}

export default NotFound;
