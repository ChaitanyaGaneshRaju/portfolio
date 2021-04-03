import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Education extends Component {
  render() {
    return (
      <div>
        {/*Vertical Time line for education details*/}
        <VerticalTimeline animate={true}>
          
          {/*B.Tech Details*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            contentStyle={{ background: "white", color: "#30072a" }}
            iconStyle={{ background: "#30072a", color: "#fff" }}
            icon={<i id="icon" className="fas fa-graduation-cap"></i>}
          >
            <h3 className="vertical-timeline-element-title">
              University College of Engineering Narasaraopet
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor of Technology
            </h4>
            <p>
                I'm pursuing 4th year of Computer Science Engineering at Univeristy College of Engineering Narasaraopet
            </p>
          </VerticalTimelineElement>

          {/*Diploma Details*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2018"
            contentStyle={{ background: "white", color: "#30072a" }}
            iconStyle={{ background: "#30072a", color: "#fff" }}
            icon={<i id="icon" className="fas fa-university"></i>}
          >
            <h3 className="vertical-timeline-element-title">M.B.T.S Govt Polytechnic</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Diploma
            </h4>
            <p>
                I have completed my Diploma in Computer Engineering with an aggregate 87%
            </p>
          </VerticalTimelineElement>

          {/*SSC Details*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2015"
            contentStyle={{ background: "white", color: "#30072a" }}
            iconStyle={{ background: "#30072a", color: "#fff" }}
            icon={<i id="icon" className="fas fa-school"></i>}
          >
            <h3 className="vertical-timeline-element-title">Care High School Narasaraopet</h3>
            <h4 className="vertical-timeline-element-subtitle">
              SSC
            </h4>
            <p>
                I completed my X standard with 9.2 GPA
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default Education;
