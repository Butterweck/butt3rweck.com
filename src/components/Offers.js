import React, { Component } from "react";
import logo from "../imgs/profile.jpg";
import "../App.css";

export class Offers extends Component {
  render() {
    return (
      <div class="All Half">
        <header>
          <img src={logo} class="Image" alt="logo" />
          <p>Sebastian Butterweck</p>
        </header>
      </div>
    );
  }
}