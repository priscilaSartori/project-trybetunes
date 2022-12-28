import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';
import './Header.css';
import logo from '../imagem/logo.png';
import iconProfile from '../imagem/iconProfile.png';
import favorito from '../imagem/favorito.png';
import searchHeader from '../imagem/searchHeader.png';

class Header extends React.Component {
  state = {
    isLoading: true,
    login: '',
  };

  componentDidMount() {
    this.renderSearch();
  }

  renderSearch = async () => {
    const user = await getUser();
    this.setState({ isLoading: false, login: user.name });
  };

  render() {
    const {
      isLoading,
      login,
    } = this.state;
    return (
      <header data-testid="header-component">
        {
          isLoading ? <Loading />
            : (
              <nav>
                <img src={ logo } alt="logo" className="logoHeader" />
                <img src={ searchHeader } alt="icone search" className="searchHeader" />
                <Link
                  to="/search"
                  data-testid="link-to-search"
                  className="nameSearch"
                >
                  Search
                </Link>
                <img src={ favorito } alt="icone favorito" className="favoritoSearch" />
                <Link
                  to="/favorites"
                  data-testid="link-to-favorites"
                  className="nameFavorite"
                >
                  Favorites
                </Link>
                <img src={ iconProfile } alt="icone profile" className="profileSearch" />
                <Link
                  to="/profile"
                  data-testid="link-to-profile"
                  className="nameProfile"
                >
                  Profile
                </Link>
              </nav>
            )
        }
        <p data-testid="header-user-name" className="username">{login}</p>
      </header>
    );
  }
}

export default Header;
