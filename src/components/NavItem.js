import React, { Component } from "react";
import "../App.css";

export class NavItem extends Component {
  render() {
    return (
      <div class="Block-1-Type-Logobox-Nav-Item">
          <a class="Element-2-Type-Logobox-Nav-Item" href= {this.props.target }>{ this.props.text }</a>
      </div>
    );
  }
}