import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ ShoppingCartPage } />
      </BrowserRouter>
    </div>
  );
}

export default App;
