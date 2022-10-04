import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

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
          isLoading ? <Loading /> : <nav>
            <Link to="/search" data-testid="link-to-search">Search</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
            <Link to="/profile" data-testid="link-to-profile">Profile</Link>
          </nav>
        }
        <p data-testid="header-user-name">{login}</p>
      </header>
    );
  }
}

export default Header;
