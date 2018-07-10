import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bookmarks from './components/Bookmarks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Bookmarks />
      </div>
    );
  }
}

export default App;
