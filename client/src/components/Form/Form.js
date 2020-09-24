import React from "react";
import "../Form/Form.css";

class Form extends React.Component {
  state = {
    virtual: true,
    value: "",
    // advocacyAndHumanRights: false,
    // animals: false,
    // childrenAndYouth: false,
    // community: false,
    // computersAndTechnology: false,
    // crisisSupport: false,
    // disabled: false,
    // disasterRelief: false,
    // educationAndLiteracy: false,
    // emergencyAndSafety: false,
    // employment: false,
    // environment: false,
    // gayLesbianBiTrans: false,
    // healthAndMedicine: false,
    // homelessAndHousing: false,
    // justiceAndLegal: false,
    // mediaAndBroadcasting: false,
    // raceAndEthnicity: false,
    // seniors: false,
    // sportsAndRecreation: false,
    // veteransAndMilitaryFamilies: false,
    // women: false,
    location: "",
    goodFor:  "",
    keywords: "",
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.location !== this.state.location && this.state.location.length > 0){
      this.setState({
        virtual: false
      })
    }
    if(prevState.virtual !== this.state.virtual && this.state.virtual){
      this.setState({
        location: ""
      })
    }
  }

  handleInputChange = (e) => {
    if(e.target.name === "location"){
      this.setState({
        location: e.target.value      
      })
    }
    else if(e.target.name === "virtual"){
      this.setState({
        virtual: !this.state.virtual
      })
    }
    else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleFilter = (evt) => {
    // console.log("evt= ", evt.target.value);
    this.setState({
      value: evt.target.value
    })
  }

  handleKeywordsInputChange = (e) => {
    this.setState({
      keywords: e.target.value
    })
  }

  handleGfChange = (en) => {
    this.setState({
      goodFor: en.target.value
    })
  }
  

  render() {
    // console.log(this.state.value);
    return (
      <div className={'form-cont'} id={"anchor"}>
        <div className={'form-inner'}>
          <form className="search">
            <div className={"select-cat"}>
              <div className={"essential-msg"}>
                <h2>Choose an area to make an impact!</h2>
              </div>
            </div>
            <input
              style={this.state.location === "" ? {opacity: 0.8} : null}
              onChange={this.handleInputChange}
              value={this.state.location}
              name={"location"}
              type={"text"}
              placeholder={"Enter Your Location"}
              id={"cation-input"}
              />
            <div className={window.location.pathname=== "/" ? 'form-select-cont-results' : "form-select-cont"}>
              <div className={"virt-opp-cont"}>
                <input
                  onChange={this.handleInputChange}
                  checked={this.state.virtual}
                  value={this.state.virtual}
                  name={"virtual"}
                  type={"checkbox"}
                  id={"cation-input"}
                  />
                <label>View ONLY virtual opportunites?</label>
              </div>
            </div>
            <select onChange={this.handleFilter} value={this.state.value} className={"select-cat"}>
              <option
              value={""}
              name={"name"}
              type={"text"}
              >-- Choose a Category --
              </option>
              <option
                value={"advocacyAndHumanRights"}
                name={"advocacyAndHumanRights"}
                type={"text"}
                id={"cation-input"}>Advocacy and Human Rights
              </option>
              <option
                value={"animals"}
                name={"animals"}
                type={"text"}
                id={"cation-input"}>Animals
              </option>
              <option
                value={"childrenAndYouth"}
                name={"childrenAndYouth"}
                type={"text"}
                id={"cation-input"}>Children and Youth
              </option>
              <option
                value={"community"}
                name={"community"}
                type={"text"}
                id={"cation-input"}>Community
              </option>
              <option
                value={"computersAndTechnology"}
                name={"computersAndTechnology"}
                type={"text"}
                id={"cation-input"}>Computers and Technology
              </option>
              <option
                value={"crisisSupport"}
                name={"crisisSupport"}
                type={"text"}
                id={"cation-input"}>Crisis Support
              </option>
              <option
                value={"disabled"}
                name={"disabled"}
                type={"text"}
                id={"cation-input"}>Disabled
              </option>
              <option
                value={"disasterRelief"}
                name={"disasterRelief"}
                type={"text"}
                id={"cation-input"}>Disaster Relief
              </option>
              <option
                value={"educationAndLiteracy"}
                name={"educationAndLiteracy"}
                type={"text"}
                id={"cation-input"}>Education and Literacy
              </option>
              <option
                value={"emergencyAndSafety"}
                name={"emergencyAndSafety"}
                type={"text"}
                id={"cation-input"}>Emergency and Safety
              </option>
              <option
                value={"employment"}
                name={"employment"}
                type={"text"}
                id={"cation-input"}>Employment
              </option>
              <option
                value={"environment"}
                name={"environment"}
                type={"text"}
                id={"cation-input"}>Environment
              </option>
              <option
                value={"gayLesbianBiTrans"}
                name={"gayLesbianBiTrans"}
                type={"text"}
                id={"cation-input"}>Gay, Lesbian, Bi, Trans
              </option>
              <option
                value={"healthAndMedicine"}
                name={"healthAndMedicine"}
                type={"text"}
                id={"cation-input"}>Health and Medicine
              </option>
              <option
                value={"homelessAndHousing"}
                name={"homelessAndHousing"}
                type={"text"}
                id={"cation-input"}>Homeless and Housing
              </option>
              <option
                value={"hunger"}
                name={"hunger"}
                type={"text"}
                id={"cation-input"}>Hunger
              </option>
              <option
                value={"justiceAndLegal"}
                name={"justiceAndLegal"}
                type={"text"}
                id={"cation-input"}>Justice and Legal
              </option>
              <option
                value={"mediaAndBroadcasting"}
                name={"mediaAndBroadcasting"}
                type={"text"}
                id={"cation-input"}>Media and Broadcasting
              </option>
              <option
                value={"raceAndEthnicity"}
                name={"raceAndEthnicity"}
                type={"text"}
                id={"cation-input"}>Race and Ethnicity
              </option>
              <option
                value={"seniors"}
                name={"seniors"}
                type={"text"}
                id={"cation-input"}>Seniors
              </option>
              <option
                value={"sportsAndRecreation"}
                name={"sportsAndRecreation"}
                type={"text"}
                id={"cation-input"}>Sports and Recreation
              </option>
              <option
                value={"veteransAndMilitaryFamilies"}
                name={"veteransAndMilitaryFamilies"}
                type={"text"}
                id={"cation-input"}>Veterans and Military Families
              </option>
              <option
                value={"women"}
                name={"women"}
                type={"text"}
                id={"cation-input"}>Women
              </option>
            </select>
            <div className={"filter-cont"}>
            <div className={window.location.pathname=== "/" ? 'cat-check-parent-results' : "cat-check-parent-gf"}>
              {/* <label>Great For</label> */}
                <select value={this.state.goodFor} onChange={this.handleGfChange} className={"select-gf"}>
                  {/* {console.log('goodFor ', this.state.goodFor)} */}
                  <option value={""} id={"cation-input"}>-- Great For --</option>
                  <option value={"groups"} id={"cation-input"}>Groups</option>
                  <option value={"seniors"} id={"cation-input"}>Seniors</option>
                  <option value={"teens"} id={"cation-input"}>Teens</option>
                  <option value={"kids"} id={"cation-input"}>Kids</option>
                </select>
              </div>
              <div className={window.location.pathname=== "/" ? 'keyword-cont-results' : "keyword-cont-kw"}>
                <input
                  onChange={this.handleKeywordsInputChange}
                  value={this.state.keywords}
                  name={"keywords"}
                  type={"text"}
                  placeholder={"Filter by keywords (optional)"}
                  id={"cation-input"}
                  className={"keywords-input"}
                />
              </div>
            </div>

            <button
                type="submit"
                onClick={(event)=>{
                  if(this.state.location === "" && !this.state.virtual){
                    event.preventDefault()
                    this.setState({
                      virtual: true
                    }, ()=>{
                      this.props.handleFormSubmit(event, this.state)
                    })
                  }
                  else {
                    this.props.handleFormSubmit(event, this.state)}
                  }
                }
                className="btn btn-success">
                Search Volunteer Opportunities
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
