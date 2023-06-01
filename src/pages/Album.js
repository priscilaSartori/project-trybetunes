import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from './Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import './Album.css';
import bgAzul1 from '../images/bgAzul1.png';

class Album extends React.Component {
  state = {
    musicAlbum: [],
    albumInfo: '',
    favorites: [],
    isLoading: false,
  };

  componentDidMount() {
    this.updateFavorite();
    this.albumSelect();
  }

  updateFavorite = async () => {
    const favorites = await getFavoriteSongs() || '[]';
    this.setState({
      isLoading: false,
      favorites: favorites.map(({ trackId }) => trackId),
    });
  };

  onFavorite = async (music) => {
    this.setState({ isLoading: true });

    // const favorites = await getFavoriteSongs() || '[]';
    const { favorites } = this.state;
    if (favorites.every((fav) => music.trackId !== fav)) {
      await addSong(music);
      this.setState((prev) => ({
        favorites: [...prev.favorites, music.trackId],
        isLoading: false }));
      console.log('if');
    } else {
      await removeSong(music);
      const removeFavorites = favorites.filter((fav) => fav !== music.trackId);
      this.setState({
        favorites: removeFavorites,
        isLoading: false });
      console.log('else');
    }
  };

  albumSelect = async () => {
    const { match: { params: { id } } } = this.props;
    const selectedAlbum = await getMusics(id);
    const album = selectedAlbum.slice(1);
    this.setState({ albumInfo: selectedAlbum[0], musicAlbum: album });
  };

  render() {
    const { musicAlbum, favorites, albumInfo, isLoading } = this.state;
    if (musicAlbum.length === 0) {
      return <Loading />;
    }
    return (
      <div className="divQuadro">
        <Header />
        <img src={ bgAzul1 } alt="" width={ 1100 } className="imgSearch" />
        <div className="divPageAlbum">
          <img src={ albumInfo.artworkUrl100 } alt="imagem album" className="imgAlbum" />
          {/* <h2 data-testid="page-album" /> */}
          <h2 data-testid="artist-name" className="nameArtist">
            {albumInfo.artistName}
          </h2>
          <h2 data-testid="album-name" className="collectionName">
            {albumInfo.collectionName}
          </h2>
          <div className="faixa">
            {isLoading ? <Loading />
              : musicAlbum.map((faixa) => (
                <MusicCard
                  key={ faixa.trackId }
                  faixa={ faixa }
                  trackName={ faixa.trackName }
                  previewUrl={ faixa.previewUrl }
                  trackId={ faixa.trackId }
                  isFavorite={ favorites.includes(faixa.trackId) }
                  addFavorite={ this.onFavorite }
                />
              ))}
          </div>
        </div>
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
