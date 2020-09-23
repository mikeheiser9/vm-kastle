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
    <div className={"home-inner"}>
     <div className={"data-container"}>
    <div className={"intro-cont"}>
    {/* <div className={"sub-header"}>
       <h3>Community Engagement</h3>
      </div> */}
      <div className={"corp-cont"}>
      <img src="../../../../img/Kastle-CARES-color-logo-gray-sub-text.png" alt={"kastleCares-logo"}></img>

      </div>
      </div>
      <div className={"page-down"}>
       <div onClick={this.handleScroll}>
        <img src={"https://bespokedemo.com/wp-content/uploads/2020/02/scroll.png"} alt={"page-dwn"}></img>
       </div>
      </div>
     </div>
     </div>
    </div>
    );
  }
}

export default Home