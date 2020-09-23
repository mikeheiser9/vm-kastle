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
              <h4>Our Vision</h4>
              <p>To raise awareness on issues that matter to us, provide insight opportunities for Kastle to give back and create a positive impact in the local communities that we serve. We believe that altogether we can make a difference by contributing to a cause through donation of time and/or money.</p>
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