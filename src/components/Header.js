import React, { Component } from "react";
import logo from "../imgs/profile.jpg";
import "../App.css";

export class Header extends Component {
  render() {
    return (
      <div class="All Full">
        <header>
          <img src={logo} class="Image" alt="logo" />
          <p>Sebastian Butterweck</p>
        </header>
      </div>
    );
  }
}
