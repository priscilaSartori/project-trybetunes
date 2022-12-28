import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import './Search.css';
import BGAZUL from '../imagem/BGAZUL.png';
import search from '../imagem/search.png';

class Search extends React.Component {
  state = {
    nome: '',
    pesquisa: '',
    isSaveButtonDisabled: true,
    isLoading: false,
    filter: [],
    frase: false,
  };

  buttonSave = () => {
    const { nome } = this.state;
    const maxNumber = 1;
    if (nome.length > maxNumber) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = (event) => {
    const { value } = event.target;
    this.setState({ nome: value }, () => { this.buttonSave(); });
  };

  onButtonClick = async () => {
    const { nome } = this.state;
    this.setState({ isLoading: true, pesquisa: nome, frase: true });
    const filtro = await searchAlbumsAPI(nome);
    this.setState({ filter: filtro, nome: '', isLoading: false });
  };

  render() {
    const {
      nome,
      isSaveButtonDisabled,
      isLoading,
      filter,
      pesquisa,
      frase,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        {
          isLoading ? <Loading />
            : (
              <div className="area">
                <img src={ BGAZUL } alt="fundo azul" className="fundoAzulSearch" />
                <form>
                  <label htmlFor="name">
                    <input
                      data-testid="search-artist-input"
                      id="name"
                      name="nome"
                      type="text"
                      value={ nome }
                      onChange={ this.onInputChange }
                      placeholder="Digite o nome da banda ou do artista"
                      className="search"
                    />
                    <img src={ search } alt="search" className="imgSearch" />
                  </label>
                  <button
                    data-testid="search-artist-button"
                    type="button"
                    disabled={ isSaveButtonDisabled }
                    onClick={ this.onButtonClick }
                    className="btnProcurar"
                  >
                    Pesquisar
                  </button>
                </form>
              </div>
            )
        }
        <section className="bgBrancoCinza">
          {frase && (
            <h4 className="busca">
              Resultado de álbuns de:
              {' '}
              {pesquisa}
            </h4>)}
          <div className="resultados">
            {filter.length === 0 ? <h2>Nenhum álbum foi encontrado</h2>
              : (filter.map((artista) => (
                <Link
                  to={ `/album/${artista.collectionId}` }
                  data-testid={ `link-to-album-${artista.collectionId}` }
                  key={ artista.collectionId }
                >
                  <img src={ artista.artworkUrl100 } alt="collection" />
                  <h2 className="texto">{artista.artistName}</h2>
                  <h2 className="texto">{artista.collectionName}</h2>
                  <h2 className="texto">{artista.collectionPrice}</h2>
                  <h2 className="texto">{artista.releaseDate}</h2>
                </Link>
              )))}
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
