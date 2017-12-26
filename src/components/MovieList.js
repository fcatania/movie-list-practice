import React, { Component } from 'react';
import './MovieList.css';
import NoMovieFound from './NoMovieFound.js';

class MovieList extends Component {
  render() {
    let hasMovie = false;
    let comp = this.props.movies.map((movie) => {
      if (movie.title.includes(this.props.searchValue)) {
        hasMovie = true;
        return <p key={movie.id}>{movie.title}</p>  
      }
      return null;
    });

    if (!hasMovie) {
      comp = <NoMovieFound />;
    }

    return (
      <div className="MovieList">
        {comp}
      </div>
    );
  }
}

export default MovieList;