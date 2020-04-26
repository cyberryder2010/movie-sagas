import React, { Component } from "react";
import { connect } from "react-redux";

class PageDetails extends Component {
  render() {
    return (
      <div>
        <h1>DETAILS</h1>
        {this.props.match.params.id}
      </div>
    );
  }
}

export default connect()(PageDetails);
