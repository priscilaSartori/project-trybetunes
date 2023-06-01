import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
import './Login.css';
import logo from '../images/logo.png';

class Login extends React.Component {
  state = {
    login: '',
    isSaveButtonDisabled: true,
    isLoading: false,
  };

  buttonSave = () => {
    const { login } = this.state;
    const maxNumber = 2;
    if (login.length > maxNumber) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = (event) => {
    const { value } = event.target;
    this.setState({ login: value }, () => { this.buttonSave(); });
  };

  onButtonClick = async () => {
    const { login } = this.state;
    const { history: { push } } = this.props;
    this.setState({ isLoading: true });
    await createUser({ name: login });
    push('./search');
    this.setState({ isLoading: false });
  };

  render() {
    const {
      login,
      isSaveButtonDisabled,
      isLoading,
    } = this.state;

    return (
      <div data-testid="page-login" className="quadroBranco">
        <img src={ logo } alt="logo" className="imgLogo" />
        <form>
          <label htmlFor="name">
            <input
              data-testid="login-name-input"
              id="name"
              name="login"
              type="text"
              value={ login }
              placeholder="Qual é o seu nome?"
              onChange={ this.onInputChange }
              className="inputName"
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ this.onButtonClick }
            className="buttonEntrar"
          >
            Entrar
          </button>
          {isLoading && <Loading />}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
