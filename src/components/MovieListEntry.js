import React, { Component } from 'react';
import './MovieListEntry.css';

class MovieListEntry extends Component {
  render() {
    return (
      <div className="MovieListEntry">
        <h3 className="MovieListEntry-title">{this.props.movie.title}</h3>
        <h5 className="MovieListEntry-desc">{this.props.movie.desc}</h5>
        <h6 className="MovieListEntry-watched">Watched:</h6>
        <input type="checkbox" checked={this.props.movie.watched ? 1 : 0} onChange={() => {this.props.clickWatch(this.props.index)}}/>
      </div>
    );
  }
}

export default MovieListEntry;