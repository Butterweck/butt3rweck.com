import React, { Component } from "react";
import "../App.css";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export class Projects extends Component {
  render() {
    return (
      <Timeline
        className="Block-1 Block-1-Full Block-1-Type-Projects"
        animate={ false }
        lineColor={"darkgrey"}
      >
      <TimelineItem
          key="001"
          dateComponent={
            <div class="Element-2-Type-Timeline-Item-Date">
              01/2019 - today
            </div>
          }
        >
          <div class="Element-2-Type-Timeline-Item-Data">
            <h3 class="Subelem-3-Type-Timeline-Item-Data">Scrum Master and Atlassian Admin, a german public authority</h3>
            <h4 class="Subelem-3-Type-Timeline-Item-Data">Freelancer</h4>
            <p class="Subelem-3-Type-Timeline-Item-Data">Coaching a team of XX people</p>
            <p class="Subelem-3-Type-Timeline-Item-Data">
              Administering an Atlassian environment for > 3000 users
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateComponent={
            <div class="Element-2-Type-Timeline-Item-Date">
              06/2018 - 12/2018
            </div>
          }
        >
          <div class="Element-2-Type-Timeline-Item-Data">
            <h3 class="Subelem-3-Type-Timeline-Item-Data">Scrum Master, Deutsche Telekom AG</h3>
            <h4 class="Subelem-3-Type-Timeline-Item-Data">Freelancer</h4>
            <p class="Subelem-3-Type-Timeline-Item-Data">Coaching a team of > 30 people; providing a scaling mechanism for its 4 sub-teams</p>
            <p class="Subelem-3-Type-Timeline-Item-Data">
              Responsible for the team’s jira and confluence setup as a project
              admin, consulting and supporting the team in their jira use
            </p>
            <p class="Subelem-3-Type-Timeline-Item-Data">
              Participating in introducing SAFe as a scaling framework for the
              project (> 150 people)
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateComponent={
            <div class="Element-2-Type-Timeline-Item-Date">
              09/2017 - 06/2018
            </div>
          }
        >
          <div class="Element-2-Type-Timeline-Item-Data">
            <h3 class="Subelem-3-Type-Timeline-Item-Data">Scrum Master, Reservix GmbH</h3>
            <p class="Subelem-3-Type-Timeline-Item-Data">
              Introducing scrum in a newly built devops team;
              coaching the team remotely
            </p>
            <p class="Subelem-3-Type-Timeline-Item-Data">Coaching two co-located dev teams</p>
            <p class="Subelem-3-Type-Timeline-Item-Data">
              Admin for a self-hosted 25 user Jira and Confluence instance:
              <ul class="Subelem-4-Type-Timeline-Item-Data-List">
                <li>Managing workflows, boards, permissions</li>
                <li>
                  Consulting and supporting developments teams in their project
                  setup
                </li>
                <li>Managing the hosting service provider</li>
              </ul>
            </p>
            <p class="Subelem-3-Type-Timeline-Item-Data">
              Leading a migration project: Merging two Jira instances (25 users
              and 100 users) due to a company merger
            </p>
          </div>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateComponent={
            <div class="Element-2-Type-Timeline-Item-Date">
              03/2014 - 03/2018
            </div>
          }
        >
          <div class="Element-2-Type-Timeline-Item-Data">
            <h3 class="Subelem-3-Type-Timeline-Item-Data">Product Owner, Reservix GmbH</h3>
            <p class="Subelem-3-Type-Timeline-Item-Data">
              Project management for an externally developed software product
            </p>
            <p class="Subelem-3-Type-Timeline-Item-Data">
              Starting an internal dev team (now > 15 people); insourcing the
              development of the product
            </p>
            <p class="Subelem-3-Type-Timeline-Item-Data">Introducing Scrum for the first time in the company</p>
            <p class="Subelem-3-Type-Timeline-Item-Data">
              Finishing two major projects inside our product: a reporting tool
              and a CRM tool
            </p>
          </div>
        </TimelineItem>
      </Timeline>
    );
  }
}
