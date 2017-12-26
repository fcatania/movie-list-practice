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

  componentWillReceiveProps() {
    this.setState({shouldDisplayInfo: false});
  }

  clickHandle() {
    this.setState({shouldDisplayInfo: !this.state.shouldDisplayInfo});
  }

  render() {
    return (
      <div className="MovieListEntry" onClick={this.clickHandle}>
        <h3 className="MovieListEntry-title">{this.props.movie.title}</h3>
        <h5 className="MovieListEntry-desc">{this.props.movie.desc}</h5>
        <h6 className="MovieListEntry-watched">Watched:</h6>
        <input type="checkbox" checked={this.props.movie.watched ? 1 : 0} onChange={() => {this.props.clickWatch(this.props.index)}}/>
        {this.state.shouldDisplayInfo ? 
          <div>
            <h6 className="MovieListEntry-info"><b>Year:</b> 1995</h6>
            <h6 className="MovieListEntry-info"><b>Budget:</b> $1.000.000</h6>
            <h6 className="MovieListEntry-info"><b>Revenue:</b> $5.000.000</h6>
          </div>
        : null}
      </div>
    );
  }
}

export default MovieListEntry;