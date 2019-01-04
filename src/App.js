import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Field } from "./components/Field";
import { Projects } from "./components/Projects";
import { Quotes } from "./components/Quotes";
import { SimpleBlock } from "./components/SimpleBlock";
import { Logobox } from "./components/Logobox";

class App extends Component {

  skills = {
    "Scrum Master" : "FaUndo",
    "Agile Transformation" : "FaSync",
    "Scaling Agile" : "FaChartLine",
    "Self Selection Workshops" : "FaUsers",
    "Creating Transparency" : "FaDoorOpen",
    "Exciting Retros" : "FaCoffee",
    "Team Building" : "FaBeer",
    "Remote First" : "FaQuestion",
    "Conflict Mediation" : "FaAngry",
    "Jira Administration" : "FaServer",
    "Confluence Administration" : "FaServer",
    "Product Owner" : "FaBoxOpen",
  };

  render() {
    return (
      <div class="Container">
        <Logobox />
        <div class="Outer-0">
          <Header />
          <Field elements = { this.skills } />
          <SimpleBlock />
          <SimpleBlock />
          <SimpleBlock />
        </div>
      </div>
    );
  }
}

export default App;
