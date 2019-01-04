import React, { Component } from "react";
import profile from "../imgs/profile.jpg";
import "../App.css";
import { SimpleBlock } from "./SimpleBlock";
import { Field } from "./Field";

export class Header extends Component {
  render() {
    return (
      <div>
        
        <Field elements = { this.props.contactData } />
        <div class="Block-1 Block-1-Full Block-1-Type-Header">
          <img
            class="Element-2-Type-Header-Image"
            src={profile}
            alt="profile"
          />
          <p class="Element-2-Type-Header-Text">
            Working with Scrum since almost 5 years, I am convinced that the
            success or failure of a dev team is highly depending on the degree
            of transparency that the team shows - both towards external and
            internal stakeholders.
            <br />
            &nbsp;
            <br />I supported dev teams from the fields of web, embedded and
            devops both as a product owner and scrum master. Also, I have a very
            good technical understanding and can communicate to developers on a
            technical level. The most important thing I can support a team with
            is taking different perspectives, mediate and translate.
          </p>
        </div>
      </div>
    );
  }
}
