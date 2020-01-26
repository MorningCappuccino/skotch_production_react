import React, { Component } from "react";
import "./App.css";
import WeCallYou from "./components/WeCallYou/WeCallYou";
import Overlay from "./components/Overlay/Overlay";

import MainPage from "./App.styled";
import MainScreen from "./components/mainScreen";
import Menu from "./components/menu";
import AboutUs from "./components/aboutUs";
import StepOfProduction from "./components/stepOfProduction";
import OurWork from "./components/ourWork";
import Contacts from "./components/contacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage>
          <MainScreen />
          <Menu />
          <AboutUs />
          <StepOfProduction />
          <OurWork />
          <Contacts />
          <WeCallYou />
          <Overlay />
        </MainPage>
      </div>
    );
  }
}

export default App;
