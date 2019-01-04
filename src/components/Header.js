import React, { Component } from "react";
import "../App.css";
import { SimpleBlock } from "./SimpleBlock";
import { Field } from "./Field";

export class Header extends Component {
  render() {
    const descriptionLength = this.props.description.length;
    var parsedDescription = this.props.description.map(function(text, index) {
      if (descriptionLength == index) {
        return text;
      } else {
        return (
          <div>
            {text} <br /> &nbsp; <br />
          </div>
        );
      }
    })

    return (
      <div>
        <Field elements={this.props.contactData} />
        <div class="Block-1 Block-1-Full Block-1-Type-Header">
          <img
            class="Element-2-Type-Header-Image"
            src={this.props.img}
            alt={this.props.alt}
          />
          <p class="Element-2-Type-Header-Text">
            { parsedDescription }
          </p>
        </div>
      </div>
    );
  }
}
