import React, { Component } from 'react';
import './MovieList.css';
import movies from '../DummyData.js';

class MovieList extends Component {
  render() {
    return (
      <div className="MovieList">
        {movies.map((movie) => {
          return <p key={movie.id}>{movie.title}</p>
        })}
      </div>
    );
  }
}

export default MovieList;