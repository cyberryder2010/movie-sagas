import React, { Component } from "react";
import { connect } from "react-redux";

class PageDetails extends Component {
  onEditClick = (event) => {
    this.props.history.push("/edit");
  };

  onBackClick = (event) => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>DETAILS</h1>
        {this.props.match.params.id}
        <button onClick={this.onBackClick}>Back to List</button>
        <button onClick={this.onEditClick}>Edit</button>
      </div>
    );
  }
}

export default connect()(PageDetails);
