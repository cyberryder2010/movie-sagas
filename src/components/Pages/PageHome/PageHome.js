import React, { Component } from "react";
import { connect } from "react-redux";

class PageHome extends Component {
  state = {
    description: "",
  };

  onPosterClick = (event, id) => {
    this.props.dispatch({
      type: "GET_MOVIES",
      payload: this.state.description,
    });
    this.props.history.push(`/details/${id}`);
  };

  render() {
    const moviesList = this.props.store.movies.map((item, index) => {
      return (
        <div key={index} className="moviesHome">
          <img
            onClick={(event) => this.onPosterClick(event, item.id)}
            src={item.poster}
          />
          <div className="moviesDesc">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2>HOME</h2>
        {moviesList}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PageHome);
