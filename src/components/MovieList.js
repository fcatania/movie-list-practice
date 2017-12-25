import React, { Component } from 'react';
import './MovieList.css';
import movies from '../DummyData.js';
import NoMovieFound from './NoMovieFound.js';

class MovieList extends Component {
  render() {
    return (
      <div className="MovieList">
        {movies.map((movie) => {
          if (movie.title.includes(this.props.searchValue)) {
            return <p key={movie.id}>{movie.title}</p>  
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

export default MovieList;