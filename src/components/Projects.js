import React, { Component } from "react";
import logo from "../imgs/profile.jpg";
import "../App.css";

export class Projects extends Component {
  render() {
    return (
      <div class="All Half">
          <div class="Header-Image">
            <img class="Image" src={logo} alt="logo" />
          </div>
          <div class="Text">
            <p>Sebastian Butterweck</p>
          </div>
      </div>
    );
  }
}
