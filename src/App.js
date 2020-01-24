import React, { Component } from "react";
import "./App.css";
import WeCallYou from "./components/WeCallYou/WeCallYou";
import Overlay from "./components/Overlay/Overlay";

import MainPage from "";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage>
          <MainScreen />
          <WeCallYou />
          <Overlay />
        </MainPage>
      </div>
    );
  }
}

export default App;
