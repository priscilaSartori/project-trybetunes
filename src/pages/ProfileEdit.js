import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from './Loading';
import { getUser, updateUser } from '../services/userAPI';

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
    const { name, email, description, image } = filtro;
    this.setState({
      isLoading: false,
      name,
      email,
      description,
      image,
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
    if (emailValido && name && email && description && image) {
      this.setState({ evaluation: false });
    } else {
      this.setState({ evaluation: true });
    }
  };

  uptadeInfo = async () => {
    this.setState({ isLoading: true });
    const { history: { push } } = this.props;
    const filtro = await updateUser();
    const { name, email, description, image } = filtro;
    this.setState({
      isLoading: false,
      name,
      email,
      description,
      image,
    });
    push('./profile');
  };

  render() {
    const { isLoading, name, email, description, image, evaluation } = this.state;
    return (
      <div>
        <Header />
        <div data-testid="page-profile-edit" />
        {isLoading ? <Loading />
          : (
            <form>
              <label htmlFor="edit-input-name">
                Nome:
                <input
                  data-testid="edit-input-name"
                  id="name"
                  name="name"
                  type="text"
                  value={ name }
                  onChange={ this.onInputChange }
                />
              </label>
              <label htmlFor="edit-input-email">
                Email:
                <input
                  data-testid="edit-input-email"
                  id="email"
                  name="email"
                  type="text"
                  value={ email }
                  onChange={ this.onInputChange }
                />
              </label>
              <label htmlFor="edit-input-description">
                Descrição:
                <input
                  data-testid="edit-input-description"
                  id="description"
                  name="description"
                  type="text"
                  value={ description }
                  onChange={ this.onInputChange }
                />
              </label>
              <label htmlFor="edit-input-image">
                Image:
                <input
                  data-testid="edit-input-image"
                  id="image"
                  name="image"
                  type="text"
                  value={ image }
                  onChange={ this.onInputChange }
                />
              </label>
              <button
                data-testid="edit-button-save"
                type="button"
                disabled={ evaluation }
                onClick={ this.uptadeInfo }
              >
                Enviar
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
