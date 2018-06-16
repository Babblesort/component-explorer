import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountedTextarea from './counted-textarea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CountedTextarea />
      </div>
    );
  }
}

export default App;
