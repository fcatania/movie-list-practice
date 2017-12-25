import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
import AddBar from './AddBar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  onInputChange(e) {
    this.setState({searchValue: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zilio Movies</h1>
        </header>
        <div className="App-movies-container">
          <AddBar />
          <SearchBar onInputChange={this.onInputChange.bind(this)}/>
          <MovieList searchValue={this.state.searchValue}/>
        </div>
      </div>
    );
  }
}

export default App;
