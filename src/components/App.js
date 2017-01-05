import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Header />
          <Portfolio />
        </main>
        <About />
      </div>
    );
  }
}

export default App;
