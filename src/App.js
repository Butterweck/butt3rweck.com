import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Field } from "./components/Field";
import { Projects } from "./components/Projects";
import { Quotes } from "./components/Quotes";
import { SimpleBlock } from "./components/SimpleBlock";
import { Logobox } from "./components/Logobox";
import profile from "./imgs/profile.jpg";

class App extends Component {
  skills = {
    "Scrum Master": "FaUndo",
    "Agile Transformation": "FaSync",
    "Scaling Agile": "FaChartLine",
    "Self Selection Workshops": "FaUsers",
    "Creating Transparency": "FaDoorOpen",
    "Exciting Retros": "FaCoffee",
    "Team Building": "FaBeer",
    "Remote First": "FaTelegramPlane",
    "Conflict Mediation": "FaAngry",
    "Jira Administration": "FaServer",
    "Confluence Administration": "FaServer",
    "Product Owner": "FaBoxOpen"
  };

  contactData = {
    "Sebastian Butterweck": "FaIdCard",
    "1990-12-08": "FaStarOfLife",
    "info@butt3rweck.com": "FaAt"
  };

  shortTexts = [
    "Working with Scrum since almost 5 years, I am convinced that the success or failure of a dev team is highly depending on the degree of transparency that the team shows - both towards external and internal stakeholders.",
    "I supported dev teams from the fields of web, embedded and devops both as a product owner and scrum master. Also, I have a very good technical understanding and can communicate to developers on a technical level. The most important thing I can support a team with is taking different perspectives, mediate and translate."
  ];

  render() {
    return (
      <div class="Container">
        <Logobox />
        <div class="Outer-0">
          <SimpleBlock
            description="That's me."
            headline="true"
            anchor="home"
          />
          <Header
            contactData={this.contactData}
            img={profile}
            alt="Sebastian Butterweck"
            description={this.shortTexts}
          />
          <SimpleBlock
            description="That's what I offer to development teams."
            headline="true"
            anchor="offers"
          />
          <Field elements={this.skills} />
          <SimpleBlock
            description="I've worked in these projects."
            headline="true"
            anchor="projects"
          />
          <Projects />
          <SimpleBlock
            description="More text"
            headline="true"
            anchor="references"
          />
          <SimpleBlock />
          <SimpleBlock
            description="More text"
            headline="true"
          />
          <SimpleBlock />
        </div>
      </div>
    );
  }
}

export default App;
