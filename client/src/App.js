import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import Header from "./components/Header"
import Results from "./components/Results";

import axios from "axios"

// import NoMatch from "./components/NoMatch";

class App extends Component {
  state = {
    data: null,
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
    axios.post('https://bespokedigitallabs.com/getVmData', {form: this.state.form}).then(response => {
      this.setState({
        vmData: response.data
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.form !== this.state.form){
      axios.post('https://bespokedigitallabs.com/getVmData', {form: this.state.form}).then(response => {
        this.setState({
          vmData: response.data
        })
      })
    }
  }

  render() {
    return (
    <div className="App">
    <Router>
      <Header />
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
