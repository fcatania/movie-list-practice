import React, { Component } from 'react';
import './MovieList.css';

class MovieList extends Component {
  render() {
    return (
      <div className="MovieList">
        {this.props.movies.map((movie) => <p key={movie.id}>{movie.title}</p>)}
      </div>
    );
  }
}

export default MovieList;