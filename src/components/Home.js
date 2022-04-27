import React from 'react';
import ShoppingCartButton from './ShoppingCartButton';

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="main-section-home">
          <input type="text" />
          <button type="button">Lupa</button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
        <ShoppingCartButton />
      </div>
    );
  }
}

export default Home;
