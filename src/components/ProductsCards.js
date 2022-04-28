import React from 'react';
import PropTypes from 'prop-types';

class ProductsCards extends React.Component {
  render() {
    const { id, title, price, thumbnail } = this.props;
    return (
      <div key={ id }>
        <h3 className="product-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$${price}` }</p>
      </div>
    );
  }
}

ProductsCards.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default ProductsCards;
