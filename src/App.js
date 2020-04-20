import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landPage";
import resourcePage from "./components/resources/resources";
import Network from "./components/network/network";
import Materials from "./components/materials/materials";
import Companies_Applications from "./components/companieApplications/companies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/resources" component={resourcePage} />
      <Route path="/network" component={Network} />
      <Route path="/materials" component={Materials} />
      <Route path="/companies" component={Companies_Applications} />
    </div>
  );
}

export default App;
