import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Offers } from "./components/Offers";
import { Projects } from "./components/Projects";
import { Quotes } from "./components/Quotes";

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header />
        <Offers />
      </div>
    );
  }
}

export default App;
