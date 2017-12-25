import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zilio Movies</h1>
        </header>
        <MovieList />
      </div>
    );
  }
}

export default App;
