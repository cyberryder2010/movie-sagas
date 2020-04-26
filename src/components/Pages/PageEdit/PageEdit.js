import React, { Component } from "react";
import { connect } from "react-redux";

class PageEdit extends Component {
  state = {
    title: "",
    description: "",
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onSaveClick = (event) => {
    this.props.dispatch({ type: "GET_DETAILS", payload: this.state.title });
  };

  onCancelClick = (event) => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>EDIT</h1>
        <div>
          <input
            type="text"
            onChange={this.onInputChange("title")}
            placeholder="Change Title"
          />
          <input
            type="text"
            onChange={this.onInputChange("description")}
            placeholder="Edit Description"
          />
        </div>
        <button onClick={this.onCancelClick}>Cancel</button>
        <button onClick={this.onSaveClick}>Save</button>
      </div>
    );
  }
}

export default connect()(PageEdit);
