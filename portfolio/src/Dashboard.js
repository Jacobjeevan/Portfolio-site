import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/hobbies">
            <Hobbies />
          </Route>
        </Switch>
      </div>
    );
  }
}
