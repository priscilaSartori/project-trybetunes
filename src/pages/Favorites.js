import React from 'react';
import PropTypes from 'prop-types';
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
    console.log(favoritas);
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

Favorites.propTypes = {
  checked: PropTypes.string.isRequired,
  faixa: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
    trackId: PropTypes.number,
  }).isRequired,
};

export default Favorites;
