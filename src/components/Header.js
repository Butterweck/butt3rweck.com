import React, { Component } from "react";
import logo from "../imgs/profile.jpg";
import "../App.css";

export class Header extends Component {
  render() {
    return (
      <div class="All Full Header">
        <div class="Header-Image">
          <img class="Image" src={logo} alt="logo" />
        </div>
        <div class="Text">
          <p>
            Working with Scrum since almost 5 years, I am convinced that the
            success or failure of a dev team is highly depending on the degree
            of transparency that the team shows - both towards external and
            internal stakeholders.
          </p>
          <p>
            I supported dev teams from the fields of web, embedded and devops
            both as a product owner and scrum master. Also, I have a very good
            technical understanding and can communicate to developers on a
            technical level. The most important thing I can support a team with
            is taking different perspectives, mediate and translate.
          </p>
        </div>
      </div>
    );
  }
}
