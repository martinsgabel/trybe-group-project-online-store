import React from 'react';

class Home extends React.Component{
  render() {
    return (
      <section className="main-section-home">
        <input></input>
        <button type="button"></button>
        <p data-testid="home-initial-message">"Digite algum termo de pesquisa ou escolha uma categoria."</p>
      </section>
    )
  }
}

export default Home;
