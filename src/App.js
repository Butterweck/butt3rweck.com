import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Quotes } from "./components/Quotes";
import { Logobox } from "./components/Logobox";

class App extends Component {
  render() {
    return (
      <div class="Container">
        <Logobox />
        <div class="Outer-0">
          <Header />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
