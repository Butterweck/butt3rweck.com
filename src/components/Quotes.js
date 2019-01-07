import React, { Component } from "react";
import ralf from "../imgs/ralf.jpg";
import "../App.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export class Quotes extends Component {
  render() {
    return (
      <div class="Block-1 Block-1-Full Block-1-Type-Quotes">
        <img class="Element-2-Type-Quote-Image" src={ralf} alt="logo" />
        <FaQuoteLeft class="Element-2-Type-Quote-Icon-Left" />
        <p class="Element-2-Type-Quote-Text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.{" "}
        </p>
        <FaQuoteRight class="Element-2-Type-Quote-Icon-Right" />
        <h3 class="Element-2-Type-Quote-Name">Ralf Karge</h3>
        <h4 class="Element-2-Type-Quote-Name"> Deutsche Telekom AG</h4>
      </div>
    );
  }
}
