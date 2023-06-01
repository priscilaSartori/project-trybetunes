import React from 'react';
import PropTypes from 'prop-types';
// import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import '../pages/Album.css';

class MusicCard extends React.Component {
  render() {
    const {
      faixa: { trackName, previewUrl, trackId }, addFavorite, isFavorite } = this.props;
    return (
      <div className="faixaAlbum">
        <h4 className="h4faixa">{trackName}</h4>
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
          <hr className="linha" />
        </label>
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
    trackId: PropTypes.number,
  }).isRequired,
};

export default MusicCard;
