import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import './Favorites.css';

class Favorites extends React.Component {
  state = { favorites: [], isLoading: false };

  async componentDidMount() {
    const favorites = await getFavoriteSongs() || '[]';
    this.setState({ favorites });
  }

  onFavorite = async (music) => {
    const { favorites: favoriteList } = this.state;
    this.setState({ isLoading: true });
    const favorites = favoriteList.filter((fav) => fav.trackId !== music.trackId);
    await removeSong(music);
    this.setState({ favorites, isLoading: false });
  };

  render() {
    const { favorites, isLoading } = this.state;
    return (
      <div>
        <Header />
        <p className="textoFavoritas">Musicas Favoritas</p>
        <div data-testid="page-favorites" className="divPageFavorites">
          {favorites !== undefined
          && (
            favorites.map((faixa) => (
              <div key={ faixa.trackId } className="faixasFavorites">
                {isLoading ? <Loading />
                  : (
                    <MusicCard
                      faixa={ faixa }
                      trackName={ faixa.trackName }
                      previewUrl={ faixa.previewUrl }
                      trackId={ faixa.trackId }
                      isFavorite
                      addFavorite={ this.onFavorite }
                    />
                  )}
              </div>)))}
        </div>
      </div>
    );
  }
}

export default Favorites;
