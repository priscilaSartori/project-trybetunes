import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class Music extends React.Component {
  state = {
    favorita: false,
    isLoading: true,
    checked: '',
  };

  componentDidMount() {
    this.favoriteMusics();
  }

  favoriteMusics = async () => {
    const { faixa: { trackId } } = this.props;
    const musicsFavorites = await getFavoriteSongs();
    const salveFav = musicsFavorites.some((faixaFav) => faixaFav.trackId === trackId);
    this.setState({ isLoading: false, favorita: salveFav });
  };

  onInputChange = async ({ target }) => {
    const { faixa } = this.props;
    this.setState({ favorita: target.checked, isLoading: true });
    if (target.checked === true) {
      await addSong(faixa);
      this.setState({ isLoading: false });
    } else {
      await removeSong(faixa);
      this.setState({ isLoading: false, checked: target.id });
    }
  };

  render() {
    const { faixa: { trackName, previewUrl, trackId } } = this.props;
    const { favorita, isLoading, checked } = this.state;
    console.log(checked);
    return (
      <div>
        {isLoading ? <Loading />
          : (
            <div>
              <h4>{trackName}</h4>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                <code>audio</code>
                .
              </audio>
              <label htmlFor="favorita">
                Favorita
                <input
                  data-testid={ `checkbox-music-${trackId}` }
                  id={ trackId }
                  type="checkbox"
                  name="favorita"
                  checked={ favorita }
                  onChange={ this.onInputChange }
                />
              </label>
            </div>
          )}
      </div>
    );
  }
}

Music.propTypes = {
  faixa: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
    trackId: PropTypes.number,
  }).isRequired,

};

export default Music;
