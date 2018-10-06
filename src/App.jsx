import React, { Component } from 'react';
import './App.scss';
import Nav from './components/nav/nav.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
      </div>
    );
  }
}

export default App;
