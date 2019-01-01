import React, { Component } from "react";
import "../App.css";
import { Skill } from "./Skill";

export class Offers extends Component {
  render() {
    return (
      <div class="All Full">
        <Skill icon="FaUndo" description="Scrum Master" />
        <Skill icon="FaSync" description="Agile Transformation" />
        <Skill icon="FaChartLine" description="Scaling Agile" />
        <Skill icon="FaUsers" description="Self Selection Workshops" />
        <Skill icon="FaDoorOpen" description="Creating Transparency" />
        <Skill icon="FaCoffee" description="Exciting Retros" />
        <Skill icon="FaBeer" description="Team Building" />
        <Skill icon="FaAngry" description="Conflict Mediation" />
        <Skill icon="FaServer" description="Jira Administration" />
        <Skill icon="FaServer" description="Confluence Administration" />
        <Skill icon="FaBoxOpen" description="Product Owner" />
      </div>
    );
  }
}
