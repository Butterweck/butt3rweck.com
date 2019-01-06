import React, { Component } from "react";
import "../App.css";
import logo from "../imgs/logo.png";
import { NavItem } from "./NavItem";


export class Logobox extends Component {
  render() {
    return (
      <div class="Outer-0-Logobox">
        <img class="Block-1-Type-Logobox-Image" src={logo} alt="logo" />
        <NavItem target="" text="Home"/>
        <NavItem target="" text="Offers"/>
        <NavItem target="" text="Projects"/>
        <NavItem target="" text="References"/>
        <NavItem target="" text="Impressum"/>
      </div>
    );
  }
}
