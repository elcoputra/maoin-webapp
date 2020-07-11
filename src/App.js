import React, { Component } from 'react';
import Home from './pages/Home';
import AppBar from './components/Header/index';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Home />
      </div>
    );
  }
}

export default App;
