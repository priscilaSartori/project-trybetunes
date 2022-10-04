import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-album" />
      </div>
    );
  }
}

export default Album;
