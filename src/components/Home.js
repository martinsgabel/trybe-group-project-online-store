import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductsCards from './ProductsCards';
import ShoppingCartButton from './ShoppingCartButton';

class Home extends React.Component {
  constructor() {
    super();

    this.gettingCategories = this.gettingCategories.bind(this);
    this.getInput = this.getInput.bind(this);
    this.gettingProducts = this.gettingProducts.bind(this);

    this.state = {
      categoriesList: [],
      inputSearch: '',
      productsList: [],
    };
  }

  componentDidMount() {
    this.gettingCategories();
  }

  async gettingCategories() {
    const lista = await getCategories();

    this.setState({
      categoriesList: lista,
    });
  }

  getInput(event) {
    this.setState({
      inputSearch: event.target.value,
    });
  }

  async gettingProducts() {
    const { inputSearch } = this.state;
    const products = await getProductsFromCategoryAndQuery(inputSearch);

    this.setState({
      productsList: products.results,
    });
  }

  render() {
    const { categoriesList, productsList } = this.state;
    const msgInitial = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
    return (
      <section className="main-section-home">
        <form className="searchbar">
          {/* eslint-disable-next-line max-len */}
          {/* O Lint não aceita que as linhas abaixo tenham o tamanho minimo necessario, pois somos obrigados a usar "data-testid" e isso que causa elas passarem do tamanho permitido pelo Lint! Portanto, como se trata de uma condica do projeto, desabilitamos essa regra especifica do Lint somente nessas linhas especificas. */}
          {/* eslint-disable-next-line max-len */}
          <input type="text" onChange={ (e) => this.getInput(e) } data-testid="query-input" />
          {/* eslint-disable-next-line max-len */}
          <button type="button" onClick={ this.gettingProducts } data-testid="query-button">Lupa</button>
        </form>
        <div>
          <ShoppingCartButton />
        </div>
        <div>
          <nav>
            {
              categoriesList.map((category) => (
                <button
                  data-testid="category"
                  type="button"
                  id="radiobutton"
                  key={ category.id }
                >
                  { category.name }
                </button>
              ))
            }
          </nav>
          <div>
            { productsList.length <= 0
              ? (msgInitial) : (<ProductsCards productsList={ productsList } />) }
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
