import React from "react";
import "../Results/Results.css";
import startCase from 'lodash/startCase';
import camelCase from 'lodash/camelCase';
// import template from 'lodash/template';
import { Link } from "react-router-dom";


class Results extends React.Component {
  state = {
    opp: "",
    showModal: false,
  }

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  handleClick = (opp) => {
    // console.log(opp);
    this.setState({opp, showModal: true});
    // console.log("State", this.state);
  }
  
  render() {
    const regex = /(<([^>]+)>)/ig;
    return (
      <>
        <div className={"results-container"}>
             <div className={"city-header"}>
              {
                this.props.form?.virtual || !this.props.form
                ? <h2>Choose an Opportunity and Make an Impact!</h2>
                : <h2>Opportunities Near {startCase(this.props.form?.location)} </h2>
              }
            </div>
            <div className={"results-inner"}>
             {
              this.props.vmData === ""
                ? <div className="retrieving-text">Retrieving results...</div>
                : this.props.vmData.opportunities.length > 0
                  ? this.props.vmData.opportunities.map((opportunities, index) => (
                  <div className={"cards"} key={index} >
                  {/* { console.log("opportunities ", opportunities) } */}
                    <div className={"top-card"}>
                    <div className={"opp-img"}>
                      <div className={"img-inner"}>
                      <img src={opportunities.imageUrl === null ? "https://bespokedemo.com/wp-content/uploads/2020/01/VolunteerMatch-Logo.png": opportunities.imageUrl} className="card-img-top" alt="oppotunity-img" />
                      </div>                
                    </div>
                    <div className={"org-date-cont"}>
                    <h3>{opportunities.parentOrg.name}</h3>
                      <span>Date: {opportunities.dateRange.startDate === null ? "Open Ended" : opportunities.dateRange.startDate}</span>
                  </div> 
                  </div>
                <div className={"card-body"}>
                  <div className={"category-cont"}>
                    { opportunities.categories.length === 3 ? 
                    <div className={"category-cont-inner"}>
                      {/* <span>{opportunities.location.virtual === true ? ('Virtual') : ('not virtual')}</span> */}
                      <span>{startCase(camelCase(opportunities.categories[0]))}</span>
                      <span>{startCase(camelCase(opportunities.categories[1]))}</span>
                      <span>{startCase(camelCase(opportunities.categories[2]))}</span> 
                    </div>
                    : null
                    }
                    { opportunities.categories.length === 2 ? 
                    <div className={"category-cont-inner"}>
                      <span>{startCase(camelCase(opportunities.categories[0]))}</span>
                      <span>{startCase(camelCase(opportunities.categories[1]))}</span>
                    </div>
                      : null
                    }
                    { opportunities.categories.length === 1 ? 
                    <div className={"category-cont-inner"}>
                      <span>{startCase(camelCase(opportunities.categories[0]))}</span>
                    </div>
                      : null
                    }
                    </div>
                  <div className={"opp-title-cont"}>
                    <div className={"opp-title"}>
                      <h3>{opportunities.title}</h3>
                    </div>
                    <div className={"opp-desc"}>
                      {/* {console.log("desc " + opportunities.description)} */}
                    <p>{opportunities.description.replace(regex,'')}</p>
                    </div>
                  </div>
                  <div className={"learn-more"} onClick={()=> this.handleClick(opportunities)}>
                    <span>Learn More</span>
                  </div>
                </div>
            </div>
            )
            ): <div>No results found.</div>}
        </div>
      </div>
      <div className = {this.state.showModal ? 'showModal' : 'hideModal'}>
        {/* {console.log('state after click ', this.state.opp)} */}
        <div className={"closeModal"} onClick={()=> this.setState({showModal: false})} >
           <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="times-circle" className="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g className="fa-group"><path className="fa-secondary" fill="#AB2328" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z" opacity="0.4"></path><path className="fa-primary" fill="#fff" d="M377.6 321.1a12 12 0 0 1 0 17L338 377.6a12 12 0 0 1-17 0L256 312l-65.1 65.6a12 12 0 0 1-17 0L134.4 338a12 12 0 0 1 0-17l65.6-65-65.6-65.1a12 12 0 0 1 0-17l39.6-39.6a12 12 0 0 1 17 0l65 65.7 65.1-65.6a12 12 0 0 1 17 0l39.6 39.6a12 12 0 0 1 0 17L312 256z"></path></g></svg>
        </div>
        <div className={"inner-modal"}>
          <div className={"modal-inner-top"}>
            <div className={"modal-top-left"}>
              <div className={"modal-opp-title"}>
                  <div className={"img-inner-modal"}>
                   <img src={this.state.opp.imageUrl === null ? "https://bespokedemo.com/wp-content/uploads/2020/01/VolunteerMatch-Logo.png": this.state.opp.imageUrl} className="card-img-top-modal" alt="oppotunity-img" />
                  </div> 
                <h2>{this.state.opp.title}</h2>
              </div>
              <div className="modal-opp-location">
                <h4>{this.state.opp.parentOrg?.name}</h4>
              </div>
            </div>
            <div className={"modal-top-right"}>
              <Link to={{pathname: `${this.state.opp.url}?_sid=kastle`}} target="_blank">
               <span>I Want to Help!</span>
              </Link>
            </div>
          </div>
          <div className={"modal-inner-btm"}>
            <div className={"modal-btm-left"}>
              <div>
                <h4>CATEGORIES</h4>
                <div className={"category-cont-modal"}>
                { this.state.opp.categories?.length === 3 ? 
                 <div className={"category-cont-inner-modal"}>
                  <span>{startCase(camelCase(this.state.opp.categories[0]))}</span>
                  <span>{startCase(camelCase(this.state.opp.categories[1]))}</span>
                  <span>{startCase(camelCase(this.state.opp.categories[2]))}</span> 
                 </div>
                : null
                }
                { this.state.opp.categories?.length === 2 ? 
                 <div className={"category-cont-inner"}>
                  <span>{startCase(camelCase(this.state.opp.categories[0]))}</span>
                  <span>{startCase(camelCase(this.state.opp.categories[1]))}</span>
                 </div>
                  : null
                }
                { this.state.opp.categories?.length === 1 ? 
                 <div className={"category-cont-inner"}>
                  <span>{startCase(camelCase(this.state.opp.categories[0]))}</span>
                 </div>
                  : null
                }
                </div>
              </div>
              <div>
               <h4>ABOUT</h4>
               <p>{this.state.opp.description?.replace(regex,'')}</p>
              </div>
            </div>
            <div className={"modal-btm-right"}>
              <div>
               <h4>Skills Required:</h4>
               <div className={"skills-cont"}>
               {this.state.opp.skillsNeeded?.split(";").filter(f =>{ return f.length >  1}).map(i => { return <span className={"skills-span"}>{i}</span> })}
               </div>
              </div>
              <div className="date-cont">
               <h4>Date(s):</h4>
                <span className={"modal-spans"}>{this.state.opp.dateRange?.ongoing === true ? "On Going" : this.state.opp.dateRange?.startDate + " - " + this.state.opp.dateRange?.endDate}</span>
              </div>
              <div>
               <h4>Requirements:</h4>
              <span className = {this.state.opp.requirements?.bgCheck ? 'modal-spans' : 'hide-span'}>{this.state.opp.requirements?.bgCheck === true ? "Background Check" : null }</span>
              <span className = {this.state.opp.requirements?.drLicense ? 'modal-spans' : 'hide-span'}>{this.state.opp.requirements?.drLicense === true ? "Drivers License" : null }</span>
              <span className = {this.state.opp.requirements?.minimumAge ? 'modal-spans' : 'hide-span'}>{this.state.opp.requirements?.minimumAge ? "Minimum Age: " + this.state.opp.requirements?.minimumAge : null }</span>
              <span className = {this.state.opp.requirements?.orientation ? 'modal-spans' : 'hide-span'}>{this.state.opp.requirements?.orientation === true ? "Orientation" : null }</span>
              </div>
            </div>
          </div>
        </div>
        <div className={"poweredBy"}>
          <span>Powered By: </span>
          <img src="https://bespokedemo.com/wp-content/uploads/2020/09/logovm.png" alt="powered-by-vm" />
        </div>
      </div>
    </>
    );
  }
}

export default Results;
