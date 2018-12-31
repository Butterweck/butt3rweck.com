import React, { Component } from "react";
import logo from "./imgs/profile.jpg";
import "./App.css";
import { Header } from "./components/Header";
import { Offers } from "./components/Offers";

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header />
        <Offers />
        <Offers />
      </div>
    );
  }
}

export default App;
