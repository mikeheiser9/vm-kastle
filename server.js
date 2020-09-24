const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios")

const API_URL = 'https://graphql.volunteermatch.org/graphql';

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post("/getVmData", (req, res)=>{
  let api = 'f423bb1de506857ee07d6c66510f88d4';
  let options = {
    headers: { 
      'X-api-key': api,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };
  let q = `query{
    searchOpportunities(
      input: {
        location: "virtual"
        categories: [${req.body.form}]
        virtual: true
      }
      ) {
        currentPage
        resultsSize
        opportunities {
          title
          categories
          imageUrl
          url
          skillsNeeded
          description
          volunteersNeeded
          greatFor
          dateRange {
            endDate
            endTime
            ongoing
            singleDayOpps
            startDate
            startTime
          }
          location {
            street1
            street2
            city
            region
            postalCode
            virtual
          }
          parentOrg {
            name
            mission
            url
            phoneNumber
            imageUrl
          }   
          requirements {
            bgCheck
            drLicense
            minimumAge
            orientation
         }
        }
      }
    }`
  axios.post(
    API_URL,
    JSON.stringify({query: q}),
    options
  ).then((response) => {
    console.log(response.status + ' ' + response.statusText);
    if (response.data.errors) {
      console.log(response.data.errors);
    }
    if (response.data.data) {
      res.send(response.data.data.searchOpportunities);
    }
  }).catch((error) => {
    console.log(error);
  });
})

app.post("/getVmDataKastle", (req, res)=>{
  let api = '62532c8a87825045f700cf89cdb7a70e';
  let options = {
    headers: { 
      'X-api-key': api,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };
  let q = `query{
    searchOpportunities(
        input: {
          location: "${req.body.form.location}"
          categories: [${req.body.form.value}]
          virtual: ${req.body.form.virtual}
          greatFor: ${JSON.stringify(req.body.form.greatFor).replace(/["]+/g, '')},
          keywords: ${req.body.form.keywordsArr},
        }
      ) {
        currentPage
        resultsSize
        opportunities {
          id
          title
          categories
          imageUrl
          url
          skillsNeeded
          description
          volunteersNeeded
          dateRange {
            endDate
            endTime
            ongoing
            singleDayOpps
            startDate
            startTime
          }
          location {
            street1
            street2
            city
            region
            postalCode
            virtual
          }
          parentOrg {
            name
            mission
            url
            phoneNumber
            imageUrl
          }      
          greatFor
          requirements {
            bgCheck
            drLicense
            minimumAge
            orientation
          }
        }
      }
    }`
  axios.post(
    API_URL,
    JSON.stringify({query: q}),
    options
  ).then((response) => {
    console.log(response.status + ' ' + response.statusText);
    if (response.data.errors) {
      console.log(response.data.errors);
    }
    if (response.data.data) {
      res.send(response.data.data.searchOpportunities);
    }
  }).catch((error) => {
    console.log(error);
  });
})

app.post("/getVmDataCAforAll", (req, res)=>{
  let api = '62532c8a87825045f700cf89cdb7a70e';
  let options = {
    headers: { 
      'X-api-key': api,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  };
  let q = `query{
    searchOpportunities(
        input: {
          location: "${req.body.form.location}",
          virtual: ${req.body.form.virtual},
          categories: ${JSON.stringify(req.body.arr).replace(/["]+/g, '')},
          greatFor: ${JSON.stringify(req.body.greatFor).replace(/["]+/g, '')},
          keywords: ${req.body.keywordsArr},
          sortCriteria: container,
          sortByContainers: ["tier0ca", "tier1ca", "tier2ca", "tier3ca"]
        }
      ) {
        currentPage
        resultsSize
        opportunities {
          id
          title
          categories
          imageUrl
          url
          skillsNeeded
          description
          volunteersNeeded
          dateRange {
            endDate
            endTime
            ongoing
            singleDayOpps
            startDate
            startTime
          }
          location {
            street1
            street2
            city
            region
            postalCode
            virtual
          }
          parentOrg {
            name
            mission
            url
            phoneNumber
            imageUrl
          }      
          greatFor
          requirements {
            bgCheck
            drLicense
            minimumAge
            orientation
          }
        }
      }
    }`
  axios.post(
    API_URL,
    JSON.stringify({query: q}),
    options
  ).then((response) => {
    console.log(response.status + ' ' + response.statusText);
    if (response.data.errors) {
      console.log(response.data.errors);
    }
    if (response.data.data) {
      res.send(response.data.data.searchOpportunities);
    }
  }).catch((error) => {
    console.log(error);
  });
})


app.post("/createConnectionCAforAll", (req, res)=>{
  let q = `mutation {
    createConnection ( 
      input: {
      oppId: ${req.body.opp.id}
        comments: "${req.body.comment}"
        volunteer: {
          firstName: "${req.body.firstName}"
          lastName: "${req.body.lastName}"
          email: "${req.body.email}"
          phoneNumber: "${req.body.phoneNumber}"
          zipCode: "${req.body.zipCode}"
          acceptTermsAndConditions: true
        }
      } ) {
      comments
      volunteer {
        email
        firstName
        lastName
        phoneNumber
        zipCode
      }
      enlister {
        email
        firstName
        lastName
        phoneNumber
        zipCode
      }
      shifts {
        id
        name
        notes
        date
        startTime
        endTime
        volNeeded
      }
      replies {
        id
        values
      }
    }
  }`;
  axios.post(
    API_URL,
    JSON.stringify({query: q}),
    options
  ).then((response) => {
    console.log(response.status + ' ' + response.statusText);
    if (response.data.errors) {
      console.log(response.data.errors);
    }
    if (response.data.data) {
      res.send(response.data.data.createConnection);
    }
  }).catch((error) => {
    console.log(error);
  });
})

  

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
  res.send("hello world")
});

app.listen(PORT);

console.log('App is listening on port ' + PORT);