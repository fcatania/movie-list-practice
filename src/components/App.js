import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
import AddBar from './AddBar.js';
import NoMovieFound from './NoMovieFound';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      addValue: '',
      movies: [],
      filteredMovies: [],
      'all-movies': true,
      'watched-movies': false
    };
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.onAddInputChange = this.onAddInputChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.watchMovie = this.watchMovie.bind(this);
    this.onClickTabAll = this.onClickTabAll.bind(this);
    this.onClickTabWatched = this.onClickTabWatched.bind(this);
    this._filterBySearch = this._filterBySearch.bind(this);
  }

  addMovie() {
    if (this.state.addValue === '') {
      return;
    }
    // TODO: Move API key to a safer place.
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=de81188f6fe49b0287434a98e937f871&query=${this.state.addValue}`).then((response) => {
      return response.json();
    }).then((json) => {
      var firstMovieReceived = json.results[0];
      var movieToAdd = {};
      movieToAdd.title = firstMovieReceived.title;
      movieToAdd.desc = firstMovieReceived.overview;
      movieToAdd.id = firstMovieReceived.id;
      movieToAdd.release_date = firstMovieReceived.release_date;
      movieToAdd.vote_average = firstMovieReceived.vote_average;
      movieToAdd.watched = false;
      var currMovies = this.state.movies.slice();
      currMovies.push(movieToAdd);
      this.setState({movies: currMovies, addValue: ''}, () => {
        this._filterMovies();
      });
    }).catch((err) => {
      console.log('TMDB Movie fetch failed.');
      console.error(err);
    });
  }

  watchMovie(index) {
    var currMovies = this.state.filteredMovies.slice();
    currMovies[index].watched = !currMovies[index].watched;
    this.setState({filteredMovies: currMovies}, () => {
      this._filterMovies();
    });
  }

  onAddInputChange(e) {
    this.setState({addValue: e.target.value});
  }

  // As we type in the search bar we apply a the search filter, in addition to that if we are in the watched tab we also filter with the watched filtering function.
  onSearchInputChange(e) {
    this.setState({searchValue: e.target.value}, () => {
      this._filterMovies();
    });
  }

  // Helper filtering funcion that returns true if the substring is included in the movie title.
  _filterBySearch(movie) {
    return movie.title.includes(this.state.searchValue);
  }

  // Helper filtering function that returns wheter the movie is watched or not.
  _filterByWatched(movie) {
    return movie.watched;
  }

  // Filters movies, checking in which tab are we standing and applying the correct filtering functions.
  _filterMovies() {
    var filteredMovies;
    if (this.state['all-movies']) {
      filteredMovies = this.state.movies.filter(this._filterBySearch);
    } else {
      filteredMovies = this.state.movies.filter((movie) => {
        return this._filterBySearch(movie) && this._filterByWatched(movie);
      });
      
    }
    this.setState({filteredMovies: filteredMovies});
  }

  // Set all-movies true and watched-movies false, then filter movies.
  onClickTabAll(e) {
    this.setState({'all-movies': true, 'watched-movies': false}, () => {
      this._filterMovies();
    });
  }

  // Set all-movies false and watched-movies true, then filter movies.
  onClickTabWatched(e) {
    this.setState({'all-movies': false, 'watched-movies': true}, () => {
      this._filterMovies();
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Zilio Movies</h1>
        </header>
        <div className="App-movies-container">
          <AddBar onAddInputChange={this.onAddInputChange} addHandler={this.addMovie} addValue={this.state.addValue}/>
          <div className="App-tab-container">
            <button id="all-movies" className={"App-tab-button " + (this.state['all-movies'] ? "selected" : "")} onClick={this.onClickTabAll}>ALL MOVIES</button>
            <button id="watched-movies" className={"App-tab-button " + (this.state['watched-movies'] ? "selected" : "")} onClick={this.onClickTabWatched}>WATCHED</button>
            <SearchBar onSearchInputChange={this.onSearchInputChange}/>
          </div>
          {this.state.filteredMovies.length > 0 ? <MovieList movies={this.state.filteredMovies} searchValue={this.state.searchValue} clickWatch={this.watchMovie}/> : <NoMovieFound />}
        </div>
      </div>
    );
  }
}

export default App;
