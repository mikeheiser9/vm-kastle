import React from "react";
import "../Welcome/Welcome.css";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  render() {
    return (

    <div className={"welcome-container"} id={"anchor"}>
        <div className={"wel-mid"}>
          <div className={"wel-mid-top"}>
            <div className={"mid-top-dates"}>
             <h3>Kastle Days of Service | October 15 & 16, 2020</h3>
             <a href={"#"}><span>Download Program</span></a>
            </div>
            <div className={"mid-top-txt"}>
              <p>We are scheduling two days of volunteer service to improve our local communities. Check out the opportunities that we have identified and see how you can get involved and make a difference! Sign up today!</p>
            </div>
          </div>
          <div className={"wel-mid-mid"}>
            <div className={"mid-table-cont"}>
             <img src={"../../../../img/table.png"} alt={"table"}></img>
            </div>
            <div className={"mid-img"}>
              <img src={"../../../../img/als-team.jpg"} alt={"als-walk"}></img>
            </div>
          </div>
          <div className={"wel-mid-btm"}>
            <p>To sign up for the days of service:</p>
            <ol>
              <li>Join the Kastle HR Microsoft Team <a href={"https://teams.microsoft.com/l/team/19%3a37d83de267c846f7a728c724c54e188b%40thread.tacv2/conversations?groupId=8c9686a4-f4a7-43e6-b40a-51f4807211f7&tenantId=7280061d-06ed-4a4e-a2b1-cc9ab5638c09"} target={"_blank"}><span>Join Now</span></a></li>
              <li>Click Tab “Fill | Kastle C.A.R.E.S. Days of Service” in the Kastle C.A.R.E.S. channel</li>
            </ol>
          </div>
        </div>
        <div className={"wel-btm"}>
          <div className={"vm-logo"}>
            <img src={"https://bespokedemo.com/wp-content/uploads/2020/01/VolunteerMatch-Logo.png"} alt={"vm-logo"}></img>
          </div>
          <div className={"wel-btm-inner"}>
            <div className={"wel-btm-txt"}>
              <p>Kastle has also partnered with the non-profit VolunteerMatch to provide additional charitable opportunities to you and your families in areas you wish to support. Use the button on the right to find volunteer opportunities near you.</p>
            </div>
            <div className={"wel-btm-btn"}>
              <Link to={"/search"}>
               <span>Find Other Volunteer Opportunities</span>
              </Link>
            </div>
          </div>
        </div>
    </div>
    
    );
  }
}

export default Welcome