import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';
import Home from './components/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ ShoppingCartPage } />
        <Route
          exact
          path="/product-details/:id"
          render={ (props) => (
            <ProductDetails
              query={ props.match.params.id }
            />) }
        />
      </BrowserRouter>
    </div>
  );
}

App.propTypes = {
  match: PropTypes.string.isRequired,
};

export default App;
