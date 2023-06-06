import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from './Loading';
import { getUser, updateUser } from '../services/userAPI';
import './ProfileEdit.css';

class ProfileEdit extends React.Component {
  state = {
    isLoading: false,
    name: '',
    email: '',
    description: '',
    image: '',
    evaluation: true,
  };

  componentDidMount() {
    this.infoPessoa();
  }

  infoPessoa = async () => {
    this.setState({ isLoading: true });
    const filtro = await getUser();
    this.setState({
      isLoading: false,
      name: filtro.name,
      email: filtro.email,
      description: filtro.description,
      image: filtro.image,
    });
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => { this.evaluation(); });
  };

  evaluation = () => {
    const { name, email, description, image } = this.state;
    const regex = /^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]{2,5})$/;
    const emailValido = regex.test(email);
    const infosPes = name !== '' && email !== '' && description !== '' && image !== '';
    if (emailValido && infosPes) {
      this.setState({ evaluation: false });
    }
  };

  uptadeInfo = async () => {
    const { name, email, description, image } = this.state;
    const info = { name, email, description, image };
    console.log(info);
    const { history: { push } } = this.props;
    this.setState({ isLoading: true });
    await updateUser(info);
    this.setState({ name: '', email: '', description: '', image: '' });
    push('/profile');
  };

  render() {
    const {
      isLoading,
      name,
      email,
      description,
      image,
      evaluation,
    } = this.state;
    return (
      <div className="bodyLoading">
        <Header />
        <div data-testid="page-profile-edit" />
        {isLoading ? <Loading />
          : (
            <form className="formProfileEdit">
              <label htmlFor="edit-input-name">
                Nome:
                <input
                  data-testid="edit-input-name"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nome"
                  value={ name }
                  onChange={ this.onInputChange }
                  className="inputName"
                />
              </label>
              <label htmlFor="edit-input-email">
                Email:
                <input
                  data-testid="edit-input-email"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="email"
                  value={ email }
                  onChange={ this.onInputChange }
                  className="inputEmail"
                />
              </label>
              <label htmlFor="edit-input-description">
                Descrição:
                <input
                  data-testid="edit-input-description"
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Descrição"
                  value={ description }
                  onChange={ this.onInputChange }
                  className="inputDescription"
                />
              </label>
              <label htmlFor="edit-input-image">
                <input
                  data-testid="edit-input-image"
                  id="image"
                  name="image"
                  type="text"
                  placeholder="Image"
                  value={ image }
                  onChange={ this.onInputChange }
                  className="inputImage"
                />
              </label>
              <button
                data-testid="edit-button-save"
                type="submit"
                disabled={ evaluation }
                onClick={ this.uptadeInfo }
                className="buttonProfileEdit"
              >
                Editar perfil
              </button>
            </form>
          )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfileEdit;
