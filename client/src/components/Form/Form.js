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
  };

  // handleInputChange = (e) => {
  //   console.log("e = " + e);
  //   this.setState({
  //     value: e.target.value
  //   })
  // }

  handleFilter = (evt) => {
    // console.log("evt= ", evt.target.value);
    this.setState({
      value: evt.target.value
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

          <select onChange={this.handleFilter} value={this.state.value} className={"select-cat"}>
            <option
            value={"value"}
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
        
        <button
            type="submit"
            onClick={(event)=>this.props.handleFormSubmit(event, this.state.value)} disabled={this.state.value === "" }
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
