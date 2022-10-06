import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class Music extends React.Component {
  state = {
    favorita: false,
    isLoading: false,
  };

  // componentDidMount() {
  //   this.selectFavorite();
  // }

  onInputChange = async ({ target }) => {
    this.setState({ favorita: target.checked, isLoading: true });
    const { faixa } = this.props;
    await addSong(faixa);
    this.setState({ isLoading: false });
  };

  // selectFavorite = async () => {

  // };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
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
