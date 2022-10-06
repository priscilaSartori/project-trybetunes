import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = { albumInfo: '', musicAlbum: [] };

  componentDidMount() {
    this.albumSelect();
  }

  albumSelect = async () => {
    const { match: { params: { id } } } = this.props;
    const selectedAlbum = await getMusics(id);
    const album = selectedAlbum.slice(1);
    this.setState({ albumInfo: selectedAlbum[0], musicAlbum: album });
  };

  render() {
    const { albumInfo, musicAlbum } = this.state;
    const { artistName, collectionName } = albumInfo;

    return (
      <div>
        <Header />
        <h2 data-testid="page-album"> </h2>
        <h2 data-testid="artist-name">{artistName}</h2>
        <h2 data-testid="album-name">{collectionName}</h2>
        {musicAlbum.map((faixa) => (
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

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
