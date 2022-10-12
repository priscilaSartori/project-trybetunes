import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  state = { favoritas: [] };

  componentDidMount() {
    this.musicsFavorites();
  }

  musicsFavorites = async () => {
    const favorites = await getFavoriteSongs();
    this.setState({ favoritas: favorites });
  };

  render() {
    const { favoritas } = this.state;
    return (
      <div>
        <Header />
        <div data-testid="page-favorites" />
        {favoritas.map((faixa) => (
          <div key={ faixa.trackId }>
            <MusicCard
              faixa={ faixa }
              trackName={ faixa.trackName }
              previewUrl={ faixa.previewUrl }
              trackId={ faixa.trackId }
            />
          </div>))}
      </div>
    );
  }
}

export default Favorites;
