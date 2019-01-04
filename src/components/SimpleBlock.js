import React, { Component } from "react";
import "../App.css";

export class SimpleBlock extends Component {
  description() {
    if (this.props.description) {
      return this.props.description;
    } else {
      return "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
    }
  }

  pClass() {
    if (this.props.headline) {
      return "Element-2-Type-Simple-Headline-Text";
    } else {
      return "Element-2-Type-Simple-Text";
    }
  }

  divClass() {
    if (this.props.headline) {
      return "Block-1-Type-Simple-Headline";
    } else {
      return "Block-1-Type-Simple";
    }
  }

  render() {
    return (
      <div class={ 'Block-1 Block-1-Full ' + this.divClass() } >
        <p class={ this.pClass() } > { this.description() } </p>
      </div>
    );
  }
}
