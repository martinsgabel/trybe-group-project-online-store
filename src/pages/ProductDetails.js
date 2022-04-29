import React from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';
import GoBackButton from '../components/GoBackButton';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      productchart: '',
    };
  }

  async componentDidMount() {
    const { query } = this.props;
    const productchartconst = await getProductFromId(query);
    console.log(query);

    this.setState({
      productchart: productchartconst,
    });
  }

  render() {
    const { productchart: { title, price, thumbnail, condition,
      sold_quantity: soldQuantity, domain_id: domainId } } = this.state;
    return (
      <section className="producst-details">
        <h1 data-testid="product-detail-name">{`${title} - R$ ${price}`}</h1>
        <div>
          <img src={ thumbnail } alt={ title } />
          <div>
            <p>Especificações Técnicas</p>
            <ul>
              <li>{ condition }</li>
              <li>{ soldQuantity }</li>
              <li>{ domainId }</li>
            </ul>
          </div>
        </div>
        <div>
          <ShoppingCartButton />
          <GoBackButton />
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ProductDetails;
