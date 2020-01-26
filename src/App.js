import React, { Component } from "react";
import "./App.css";
import WeCallYou from "./components/WeCallYou/WeCallYou";
import Overlay from "./components/Overlay/Overlay";

import MainPage from "./App.styled";
import MainScreen from "./components/mainScreen";
import Menu from "./components/menu";
import AboutUs from "./components/aboutUs";
import stepOfProduction from "./components/stepOfProduction";
import StepOfProduction from "./components/stepOfProduction";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage>
          <MainScreen />
          <Menu />
          <AboutUs />
          <StepOfProduction />
          <WeCallYou />
          <Overlay />
        </MainPage>
      </div>
    );
  }
}

export default App;
