import React, { Component } from "react";
import "../App.css";
import { FaBeer } from "react-icons/fa";
import { FaAngry } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSync } from "react-icons/fa";

export class Skill extends Component {
  icon(type) {
    switch (type) {
      case "FaBeer":
        return <FaBeer class="Icon-Tag" />;
        break;
      case "FaAngry":
        return <FaAngry class="Icon-Tag" />;
        break;
      case "FaServer":
        return <FaServer class="Icon-Tag" />;
        break;
      case "FaCoins":
        return <FaCoins class="Icon-Tag" />;
        break;
      case "FaBoxOpen":
        return <FaBoxOpen class="Icon-Tag" />;
        break;
      case "FaCoffee":
        return <FaCoffee class="Icon-Tag" />;
        break;
      case "FaChartLine":
        return <FaChartLine class="Icon-Tag" />;
        break;
      case "FaDoorOpen":
        return <FaDoorOpen class="Icon-Tag" />;
        break;
      case "FaUndo":
        return <FaUndo class="Icon-Tag" />;
        break;
      case "FaUsers":
        return <FaUsers class="Icon-Tag" />;
        break;
      case "FaSync":
        return <FaSync class="Icon-Tag" />;
        break;
      default:
        return <FaQuestion class="Icon-Tag" />;
        break;
    }
  }

  render() {
    return (
      <div class="Skill">
        <div class="Icon">{this.icon(this.props.icon)}</div>
        <div class="Icon-Text">
          <p class="Next-To-Icon">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
