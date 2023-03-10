import React from 'react';
import PropTypes from 'prop-types';
import divisoriaMusicas from '../imagem/divisoriaMusicas.png';

class MusicCard extends React.Component {
  render() {
    const {
      faixa: { trackName, previewUrl, trackId }, addFavorite, isFavorite } = this.props;
    return (
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
            type="checkbox"
            id="favorita"
            onChange={ () => addFavorite({ trackName, previewUrl, trackId }) }
            checked={ isFavorite }
          />
        </label>
        <br />
        <img src={ divisoriaMusicas } alt="Divisoria Musicas" />
      </div>
    );
  }
}

MusicCard.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  addFavorite: PropTypes.func.isRequired,
  faixa: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
    trackId: PropTypes.string,
  }).isRequired,
};

export default MusicCard;
