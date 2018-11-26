import React, { Component } from 'react';
import './App.css';
import WeCallYou from './components/WeCallYou/WeCallYou';
import Overlay from './components/Overlay/Overlay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeCallYou />
        <Overlay />
      </div>
    );
  }
}

export default App;
