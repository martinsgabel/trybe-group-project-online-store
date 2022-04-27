import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
      </BrowserRouter>
    </div>
  );
}

export default App;
