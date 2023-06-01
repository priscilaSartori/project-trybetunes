import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';
import './Header.css';
import logo from '../images/logo.png';
import search from '../images/search.png';
import favorite from '../images/favorite.png';
import profile from '../images/profile.png';

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
        <img src={ logo } alt="logo" className="imgLogoHeader" />
        {
          isLoading ? <Loading />
            : (
              <nav>
                <Link to="/search" data-testid="link-to-search" className="search">
                  <img src={ search } alt="" />
                  Search
                </Link>
                <Link
                  to="/favorites"
                  data-testid="link-to-favorites"
                  className="favorites"
                >
                  <img src={ favorite } alt="" />
                  Favorites
                </Link>
                <Link to="/profile" data-testid="link-to-profile" className="profile">
                  <img src={ profile } alt="" />
                  Profile
                </Link>
              </nav>
            )
        }
        <p data-testid="header-user-name" className="headerName">{login}</p>
      </header>
    );
  }
}

export default Header;
