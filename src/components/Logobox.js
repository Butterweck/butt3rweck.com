import React, { Component } from "react";
import "../App.css";
import logo from "../imgs/logo.png";
import { NavItem } from "./NavItem";


export class Logobox extends Component {
  render() {
    return (
      <div class="Outer-0-Logobox">
        <img class="Block-1-Type-Logobox-Image" src={logo} alt="logo" />
        <NavItem target="#home" text="Home"/>
        <NavItem target="#offers" text="Offers"/>
        <NavItem target="#projects" text="Projects"/>
        <NavItem target="#references" text="References"/>
        <NavItem target="" text="Impressum"/>
      </div>
    );
  }
}
