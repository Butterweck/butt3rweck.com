import React, { Component } from "react";
import logo from "../imgs/profile.jpg";
import "../App.css";

export class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Sebastian Butterweck</p>
        </header>
      </div>
    );
  }
}
