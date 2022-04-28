import React from 'react';
import getCategories from '../services/api';
import ShoppingCartButton from './ShoppingCartButton';

class Home extends React.Component {
  constructor() {
    super();

    this.gettingCategories = this.gettingCategories.bind(this);

    this.state = {
      categoriesList: [],
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

  render() {
    const { categoriesList } = this.state;
    return (
      <section className="main-section-home">
        <div className="searchbar">
          <input type="text" />
          <button type="button">Lupa</button>
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
