import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    login: '',
    isSaveButtonDisabled: true,
  };

  buttonSave = () => {
    const { login } = this.state;
    const maxNumber = 1;
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

  render() {
    const {
      login,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="name">
            Nome
            <input
              data-testid="search-artist-input"
              id="name"
              name="login"
              type="text"
              value={ login }
              onChange={ this.onInputChange }
              placeholder="Digite o nome da banda ou do artista"
            />
          </label>
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ this.onButtonClick }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
