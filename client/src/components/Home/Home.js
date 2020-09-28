import React from "react";
import "../Home/Home.css";
// import API from "../utils/API";

class Home extends React.Component {
    state = {
     data: null
    }
  
  handleScroll = () => {
    let element = document.getElementById("anchor");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }


  render() {
    return (
    <div className={"home-container"}>
     <div className={"data-container"}>
      <div className={"kares-cont"}>
       <img src="../../../../img/Kastle-CARES-color-logo-gray-sub-text.png" alt={"kastleCares-logo"}></img>
      </div>
      <div className={"hands-cont"}>
        <img src="../../../../img/hands-heart.jpg" alt={"hands-img"}></img>
      </div>
     </div>
     <div className={"home-btm"}>
          <p>To raise awareness on issues that matter to us, provide insight opportunities for Kastle to give back and create a positive impact in the local communities that we serve. We believe that altogether we can make a difference by contributing to a cause through donation of time and/or money.</p>
        </div>
    </div>
    );
  }
}

export default Home