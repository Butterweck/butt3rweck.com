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
import { FaTelegramPlane } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaAt } from "react-icons/fa";

export class Flag extends Component {
  icon(type) {
    switch (type) {
      case "FaBeer":
        return <FaBeer class="Subelem-4-Type-Icon" />;
        break;
      case "FaAngry":
        return <FaAngry class="Subelem-4-Type-Icon" />;
        break;
      case "FaServer":
        return <FaServer class="Subelem-4-Type-Icon" />;
        break;
      case "FaCoins":
        return <FaCoins class="Subelem-4-Type-Icon" />;
        break;
      case "FaBoxOpen":
        return <FaBoxOpen class="Subelem-4-Type-Icon" />;
        break;
      case "FaCoffee":
        return <FaCoffee class="Subelem-4-Type-Icon" />;
        break;
      case "FaChartLine":
        return <FaChartLine class="Subelem-4-Type-Icon" />;
        break;
      case "FaDoorOpen":
        return <FaDoorOpen class="Subelem-4-Type-Icon" />;
        break;
      case "FaUndo":
        return <FaUndo class="Subelem-4-Type-Icon" />;
        break;
      case "FaUsers":
        return <FaUsers class="Subelem-4-Type-Icon" />;
        break;
      case "FaSync":
        return <FaSync class="Subelem-4-Type-Icon" />;
        break;
      case "FaTelegramPlane":
        return <FaTelegramPlane class="Subelem-4-Type-Icon" />;
        break;
      case "FaStarOfLife":
        return <FaStarOfLife class="Subelem-4-Type-Icon" />;
        break;
      case "FaIdCard":
        return <FaIdCard class="Subelem-4-Type-Icon" />;
        break;
      case "FaAt":
        return <FaAt class="Subelem-4-Type-Icon" />;
        break;
      default:
        return <FaQuestion class="Subelem-4-Type-Icon" />;
        break;
    }
  }

  render() {
    return (
      <div class="Element-2-Type-Skill">
        <div class="Subelem-3-Type-Icon ">{this.icon(this.props.icon)}</div>
        <div class="Subelem-3-Type-Icon-Text">
          <p class="Subelem-4-Type-Icon-Text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}
