import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class Music extends React.Component {
  state = {
    favorita: false,
    isLoading: true,
  };

  componentDidMount() {
    this.favoriteMusics();
  }

  onInputChange = async ({ target }) => {
    this.setState({ favorita: target.checked, isLoading: true });
    // console.log(favorita);
    // console.log(favorita.map((favorit) => favorit.checked === true));
    const { faixa } = this.props;
    await addSong(faixa);
    this.setState({ isLoading: false });
  };

  favoriteMusics = async () => {
    const { faixa: { trackId } } = this.props;
    const musicsFavorites = await getFavoriteSongs();
    const salveFav = musicsFavorites.some((faixaFav) => faixaFav.trackId === trackId);
    this.setState({ isLoading: false, favorita: salveFav });
  };

  render() {
    const { faixa: { trackName, previewUrl, trackId } } = this.props;
    const { favorita, isLoading } = this.state;
    return (
      <div>
        { isLoading ? <Loading />
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
                  id="favorita"
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
