import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductsCards extends React.Component {
  render() {
    const { productsList } = this.props;
    return (
      <section>
        {
          productsList.map((product) => (
            <Link
              to={ `/product-details/${product.id}` }
              data-testid="product-detail-link"
              key={ product.id }
            >
              <div key={ product.id } data-testid="product">
                <h3 className="product-name">{ product.title }</h3>
                <img src={ product.thumbnail } alt={ `Foto: ${product.title}` } />
                <p>{`R$${product.price}`}</p>
              </div>
            </Link>
          ))
        }
      </section>
    );
  }
}

ProductsCards.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  })).isRequired, // Usando o PropTypes.shape porque o Lint proibe o uso de PropTypes.object, porem pelo o objeto ser extenso e complexo, somente faz sentido testar as propriedades que serao usadas.
};

export default ProductsCards;
