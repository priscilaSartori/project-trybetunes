import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Profile extends React.Component {
  state = {
    isLoading: false,
    dados: {},
  };

  componentDidMount() {
    this.infoPessoa();
  }

  infoPessoa = async () => {
    this.setState({ isLoading: true });
    const filtro = await getUser();
    this.setState({ isLoading: false, dados: filtro });
  };

  render() {
    const { isLoading, dados } = this.state;
    return (
      <div>
        <Header />
        <div data-testid="page-profile" />
        {isLoading ? <Loading />
          : (
            <div>
              <h2>{dados.name}</h2>
              <h2>{dados.email}</h2>
              <h2>{dados.description}</h2>
              <img src={ dados.image } alt="profile" data-testid="profile-image" />
              <Link to="/profile/edit">
                <button type="button">Editar perfil</button>
              </Link>
            </div>
          )}
      </div>
    );
  }
}

export default Profile;
