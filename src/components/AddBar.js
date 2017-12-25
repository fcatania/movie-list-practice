import React, { Component } from 'react';
import './AddBar.css';

class SearchBar extends Component {
  render() {
    return (
      <span className="AddBar">
        <input className="Add-input" type="text" placeholder="Add Movie title"/>
        <button className="Add-button" onClick={this.props.addHandler}>ADD</button>
      </span>
    );
  }
}


export default SearchBar;