import { PropTypes } from 'prop-types';
import React from 'react';

class Items extends React.Component {
  render() {
    const {
      productName,
      productImage,
      productPrice,
      quantity,
    } = this.props;

    return (
      <div>
        <img src={ productImage } alt={ productName } />
        <p data-testid="shopping-cart-product-name">{productName}</p>
        <p>{`R$ ${productPrice.toFixed(2)}`}</p>
        <div className="box-quantity">
          <span data-testid="shopping-cart-product-quantity">{quantity}</span>
        </div>
      </div>
    );
  }
}

Items.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Items;
