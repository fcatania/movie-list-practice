import React, { Component } from 'react';
import './MovieList.css';
import MovieListEntry from './MovieListEntry';

class MovieList extends Component {
  render() {
    return (
      <div className="MovieList">
        {this.props.movies.map((movie) => <MovieListEntry key={movie.id} movie={movie}/>)}
      </div>
    );
  }
}

export default MovieList;