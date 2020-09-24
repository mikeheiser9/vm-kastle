import React from "react";
import "../Welcome/Welcome.css";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  render() {
    return (

    <div className={"welcome-container"} id={"anchor"}>
        <div className={"welcome-inner"}>
            <div className={"wel-left"}>
             <h2>Kastle C.A.R.E.S.</h2>
              <h4>Vision</h4>
              <p>To raise awareness on issues that matter to us, provide insight opportunities for Kastle to give back and create a positive impact in the local communities that we serve. We believe that altogether we can make a difference by contributing to a cause through donation of time and/or money.</p>
              <h4>Kastle C.A.R.E.S. activities:</h4>
              <ul>
                <li>Sep 14-18, 2020 - 2020 JDRF Real Estate Games held virtually the week of Sept 14 – 18, 2020. <a href={"https://www2.jdrf.org/site/TR?fr_id=8072&pg=entry"} target={"_blank"}>Join the Kastle Team</a> or <a href={"https://www2.jdrf.org/site/TR?fr_id=8072&pg=entry"} target={"_blank"}>Learn more </a>about this event.</li>
                <li>Oct 15 & 16, 2020 -  Days of Service</li>
                <ul>
                <li>20th anniversary of the walk to defeat ALS. <a href={"http://web.alsa.org/site/TR?team_id=393094&fr_id=14390&pg=team"} taget={"_blank"}>Join the Kastle Team</a> to walk, fundraise and/or show your support (walk is on Oct. 17)</li>
                <li>Front porch food drive as part of the COVID-19 Relief efforts of Move for Hunger (Teams sign up link pending)</li>
                <li>Other activities will be provided to you soon</li>
                </ul>
              </ul>
              <div className={"get-started-btn"}>
                <Link to={"/search"}>
                    <span>Find Volunteer Opportunities</span>
                </Link>
              </div>
            </div>
            <div className={"wel-right"}></div>
        </div>
    </div>
    
    );
  }
}

export default Welcome