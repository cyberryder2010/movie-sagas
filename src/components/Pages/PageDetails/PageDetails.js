import React, { Component } from "react";
import { connect } from "react-redux";
class PageDetails extends Component {
  // need to display the description for the index number
  componentDidMount() {
    this.props.dispatch({
      type: "GET_DETAILS",
      payload: this.props.match.params.id,
    });
  }
  onEditClick = (event) => {
    this.props.history.push("/edit");
  };

  onBackClick = (event) => {
    this.props.history.push("/");
  };

  render() {
    let movieTitle = null;
    let movieDescription = null;
    if (this.props.store.details.length > 0) {
      movieTitle = this.props.store.details[0].title;
      movieDescription = this.props.store.details[0].description;
    }

    return (
      <div>
        <h1>DETAILS</h1>
        {this.props.match.params.id}
        <h3>{movieTitle}</h3>
        <p>{movieDescription}</p>
        <button onClick={this.onBackClick}>Back to List</button>
        <button onClick={this.onEditClick}>Edit</button>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PageDetails);
