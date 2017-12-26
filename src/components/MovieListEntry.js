import React, { Component } from 'react';
import './MovieListEntry.css';

class MovieListEntry extends Component {
  render() {
    return (
      <div className="MovieListEntry">
        <h3 className="MovieListEntry-title">{this.props.movie.title}</h3>
        <h5 className="MovieListEntry-desc">{this.props.movie.desc}</h5>
        <h6 className="MovieListEntry-watched">Watched: {this.props.movie.watched.toString()}</h6>
      </div>
    );
  }
}

export default MovieListEntry;