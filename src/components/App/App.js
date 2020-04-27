import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import PageHome from "../Pages/PageHome/PageHome";
import PageDetails from "../Pages/PageDetails/PageDetails";
import PageEdit from "../Pages/PageEdit/PageEdit";

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }

  render() {
    return (
      <div className="App">
        <h1>Movie List</h1>
        <Router>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/details/:id" component={PageDetails} />
          <Route exact path="/edit" component={PageEdit} />
        </Router>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(App);
