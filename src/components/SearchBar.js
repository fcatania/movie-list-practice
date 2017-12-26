import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <span className="SearchBar">
        <input className="Search-input" type="text" placeholder="Search by Movie title" onChange={this.props.onSearchInputChange}/>
      </span>
    );
  }
}


export default SearchBar;