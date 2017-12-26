import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
import AddBar from './AddBar.js';
import movies from '../DummyData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      addValue: '',
      movies: movies
    };
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.onAddInputChange = this.onAddInputChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie() {
    console.log(this.state.addValue);
    var movieToAdd = {};
    var currMovies = this.state.movies.slice();
    movieToAdd.id = currMovies[currMovies.length - 1].id + 1;
    movieToAdd.title = this.state.addValue;
    movieToAdd.desc = 'Some default description for an added movie.';
    currMovies.push(movieToAdd);
    this.setState({movies: currMovies});
    console.log(currMovies);
    this.setState({addValue: ''});
  }

  onAddInputChange(e) {
    this.setState({addValue: e.target.value});
  }

  onSearchInputChange(e) {
    this.setState({searchValue: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zilio Movies</h1>
        </header>
        <div className="App-movies-container">
          <AddBar onAddInputChange={this.onAddInputChange} addHandler={this.addMovie} addValue={this.state.addValue}/>
          <SearchBar onSearchInputChange={this.onSearchInputChange}/>
          <MovieList movies={this.state.movies} searchValue={this.state.searchValue}/>
        </div>
      </div>
    );
  }
}

export default App;
