import React, { Component } from 'react';
import './MovieListEntry.css';

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplayInfo: false
    };
    this.clickHandle = this.clickHandle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
      this.setState({shouldDisplayInfo: false});
    }
  }

  clickHandle(e) {
    if (e.target.id !== 'watched-checkbox') {
      this.setState({shouldDisplayInfo: !this.state.shouldDisplayInfo});  
    }
  }

  render() {
    return (
      <div className="MovieListEntry" onClick={this.clickHandle}>
        <h3 className="MovieListEntry-title">{this.props.movie.title}</h3>
        <h5 className="MovieListEntry-desc">{this.props.movie.desc}</h5>
        <h6 className="MovieListEntry-watched">Watched:</h6>
        <input id="watched-checkbox" type="checkbox" checked={this.props.movie.watched ? 1 : 0} onChange={() => {this.props.clickWatch(this.props.index)}}/>
        {this.state.shouldDisplayInfo ? 
          <div>
            <h6 className="MovieListEntry-info"><b>Release Date:</b> {this.props.movie.release_date}</h6>
            <h6 className="MovieListEntry-info"><b>Voted Rating:</b> {this.props.movie.vote_average}</h6>
          </div>
        : null}
      </div>
    );
  }
}

export default MovieListEntry;