import React, { Component } from 'react';
import './MovieList.css';
import MovieListEntry from './MovieListEntry';

class MovieList extends Component {
  render() {
    return (
      <div className="MovieList">
        {this.props.movies.map((movie, index) => <MovieListEntry key={index} movie={movie} index={index} clickWatch={this.props.clickWatch}/>)}
      </div>
    );
  }
}

export default MovieList;