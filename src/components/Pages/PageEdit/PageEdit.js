import React, { Component } from "react";
import { connect } from "react-redux";

class PageEdit extends Component {
  render() {
    return (
      <div>
        <h1>EDIT</h1>
      </div>
    );
  }
}

export default connect()(PageEdit);
