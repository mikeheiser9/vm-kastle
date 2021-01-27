import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
// import Header from "./components/Header"
import Results from "./components/Results";
import axios from "axios";

// import NoMatch from "./components/NoMatch";

class App extends Component {
  state = {
    form: "",
    vmData: ""
  };

  handleFormSubmit = (event, form) => {
    event.preventDefault()
    this.setState({
      form: form
    })
  }

  componentDidMount(){
    axios.post('https://bespokedigitallabs.com/getVmDataKastle', {
      form: {
        virtual: true,
        location: "",
        value: [],
        greatFor:  [],
        keywordsArr: '[""]'
      }
    }).then(response => {
      this.setState({
        vmData: response.data,
        form: ""
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.form !== this.state.form && this.state.form){
      this.setState({
        vmData: ""
      })
      let object = this.state.form
      let greatFor = []
      let keywordsArr = JSON.stringify(object.keywords.replace(/[^a-zA-Z0-9 ]/g, "").split(" "))
      if(object["goodFor"]){
        greatFor.push(object["goodFor"])
      }
      object.greatFor = greatFor
      object.keywordsArr = keywordsArr

      axios.post("https://bespokedigitallabs.com/getVmDataKastle", {
        form: object
      }).then(data=>{
        this.setState({
          vmData: data.data
        })
      })
    }
  }

  render() {
    return (
    <div className="App">
    <Router>
      {/* <Header /> */}
      <Route path="/" component={Home} />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/search" render={ ()=> <Form handleFormSubmit={this.handleFormSubmit} />}/>
      <Route exact path="/search" render={ ()=> <Results form={this.state.form} vmData={this.state.vmData}/> } />
      <Footer />
    </Router>
    </div>
    );
  }
}

export default App;
