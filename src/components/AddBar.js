import React, { Component } from 'react';
import './AddBar.css';

class AddBar extends Component {
  render() {
    return (
      <span className="AddBar">
        <input className="Add-input" type="text" placeholder="Add Movie title" value={this.props.addValue} onChange={this.props.onAddInputChange}/>
        <button className="Add-button" onClick={this.props.addHandler}>ADD</button>
      </span>
    );
  }
}

export default AddBar;