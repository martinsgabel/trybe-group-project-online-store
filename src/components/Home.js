import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
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
    };
  }

  componentDidMount() {
    this.gettingCategories();
  }

  async gettingCategories() {
    const lista = await getCategories();
    console.log(lista);

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
    console.log(products);
    return products;
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <section className="main-section-home">
        <div className="searchbar">
          <input type="text" onChange={ (e) => this.getInput(e) } />
          <button type="button" onClick={ this.gettingProducts }>Lupa</button>
        </div>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
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
        </div>
      </section>
    );
  }
}

export default Home;
