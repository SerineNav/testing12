import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Images from "./components/Images";
import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Home />
          <About />
          <Images />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/images" component={Images} />
          </Switch>
        </div>
      </Router>
    );
  }
}
