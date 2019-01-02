import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Quotes } from "./components/Quotes";

class App extends Component {
  render() {
    return (
      <div class="Outer-0">
        <Header />
        <Skills />
      </div>
    );
  }
}

export default App;
