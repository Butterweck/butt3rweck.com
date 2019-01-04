import React, { Component } from "react";
import "../App.css";
import { Flag } from "./Flag";
import { SimpleBlock } from "./SimpleBlock";

export class Field extends Component {
  render() {
    var rows = [];
    for (var description in this.props.elements) {
      rows.push(<Flag icon={ this.props.elements[description] } description={ description } />)
    }
    return (
      <div>
        <SimpleBlock
          description="That's what I offer to development teams."
          headline="true"
        />
        <div class="Block-1 Block-1-Full">
        { rows }
        </div>
      </div>
    );
  }
}
