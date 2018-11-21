import React, { Component } from 'react';
import './App.css';
import WeCallYou from './components/WeCallYou';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <WeCallYou />
        </header>
      </div>
    );
  }
}

export default App;
