import React from 'react';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends React.Component {
  state = {
    isLoading: false,
    login: '',
  };

  componentDidMount() {
    this.renderSearch();
  }

  renderSearch = async () => {
    this.setState({ isLoading: true });
    const user = await getUser();
    this.setState({ isLoading: false, login: user.name });
    return user.name;
  };

  render() {
    const {
      isLoading,
      login,
    } = this.state;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">{login}</p>
        {isLoading && <Loading />}
      </header>
    );
  }
}

export default Header;
