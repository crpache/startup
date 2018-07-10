import React, { Component } from 'react';
import './App.css';
import MovieCreator from './MovieCreator/MovieCreator';
import Movie from './Movie/Movie';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [
        {title: "Toy Story", year: 1995, mins: 90},
        {title: "The Hobbit", year: 2014, mins: 150},
        {title: "Iron Man", year: 2012, mins: 120},
        {title: "Les Miserables", year: 2013, mins: 120},
        {title: "Dunkirk", year: 2017, mins: 128},
        {title: "Monsters Inc.", year: 2005, mins: 90},
        {title: "Avengers", year: 2012, mins: 125},
        {title: "Star Wars", year: 1985, mins: 120}
      ],
      showMovies: true
    }
  }


  toggleMoviesHandler = ()=>{ //shows or hides list of movies
    const doesShow = this.state.showMovies;
    this.setState({showMovies: !doesShow});
  }

  deleteMovieHandler = (movieIndex)=>{ //deletes a movie from state.movies
    const movies = [...this.state.movies]; // makes copy of state.movies
    movies.splice(movieIndex,1);
    this.setState({movies: movies});
  }



  createNewMovie = (title,year,mins)=>{
    return ({
      title: title,
      year: year,
      mins: mins
    });
  }

  addMovieHandler = (movie)=>{
    const movies = [...this.state.movies];
    movies.push(movie);
    this.setState({movies: movies});
  }

  render() {
    let movieList = null;
    let showMoviesButton = "Show Movies";
    if(this.state.showMovies){
      movieList = (
        <div>
          {this.state.movies.map((movie, index) =>{
            return <Movie
              title={movie.title}
              year={movie.year}
              mins={movie.mins}
              delete={(index)=>this.deleteMovieHandler(index)}/>
          })}
        </div>
      )
      showMoviesButton = "Hide Movies";
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Movies App</h1>
        </header>

        <MovieCreator
           new={this.addMovieHandler}/>

         <button onClick={this.toggleMoviesHandler}>{showMoviesButton}</button>

        {movieList}

      </div>
    );
  }
}

export default App;
