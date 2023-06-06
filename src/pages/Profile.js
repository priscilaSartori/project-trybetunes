import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import './Profile.css';

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
      <div className="bodyProfile">
        <Header />
        <div data-testid="page-profile" />
        {isLoading ? <Loading />
          : (
            <div className="divProfile">
              <p>Nome</p>
              <h2 className="profileNome">{dados.name}</h2>
              <p>Email</p>
              <h2 className="profileEmail">{dados.email}</h2>
              <p>Descrição</p>
              <h2 className="profileDescription">{dados.description}</h2>
              <img src={ dados.image } alt="profile" data-testid="profile-image" className="profileImage" />
              <Link to="/profile/edit">
                <button type="button" id="edit" className="profilebutton">Editar perfil</button>
              </Link>
            </div>
          )}
      </div>
    );
  }
}

export default Profile;
