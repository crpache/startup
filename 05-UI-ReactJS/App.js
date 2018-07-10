import React, { Component } from 'react';
import './App.css';
import MovieCreator from './MovieCreator/MovieCreator';
import Movie from './Movie/Movie';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [ //Default movies
        {title: "Toy Story", year: 1995, mins: 90},
        {title: "The Hobbit", year: 2014, mins: 150},
        {title: "Star Wars", year: 1987, mins: 110},
        {title: "Iron Man", year: 2012, mins: 120}
      ],
      showMovies: true, //allows to show/hide movies with toggleMoviesHandler()
      newMovie: null
    }
  }


  toggleMoviesHandler = ()=>{ //shows or hides list of movies
    const doesShow = this.state.showMovies;
    this.setState({showMovies: !doesShow});
  }

  deleteMovieHandler = (movieIndex)=>{     //deletes a movie from state.movies
    const movies = [...this.state.movies]; // makes copy of state.movies
    movies.splice(movieIndex,1);          //Deletes selected movie
    this.setState({movies: movies});      //Updates state
  }

  newMovieTitle = (event)=>{ ///changes title of state.newMovie for input value
    const movie = {...this.state.newMovie};
    movie.title = event.target.value;
    this.setState({newMovie:movie});
  }

  newMovieYear = (event)=>{ ///changes year of state.newMovie for input value
    const movie = {...this.state.newMovie};
    movie.year = event.target.value;
    this.setState({newMovie:movie});
  }

  newMovieMins = (event)=>{///changes mins of state.newMovie for input value
    const movie = {...this.state.newMovie};
    movie.mins = event.target.value;
    this.setState({newMovie:movie});
  }


  addMovieHandler = ()=>{ //adds newMovie to state.movies
    const movies = [...this.state.movies]; //Makes a copy of state.movies
    movies.push(this.state.newMovie); //Adds new movie to the copy
    this.setState({movies: movies});  //updates state.movies
    this.setState({newMovie: null});  // resets state.newMovie to avoid adding empty movies or add the movie again
  }

  render() {
    let movieList = null;
    let showMoviesButton = "Show Movies";
    if(this.state.showMovies){ //iterates through state.movies and renders them
      movieList = (
        <div>
          {this.state.movies.map((movie, index) =>{
            return <Movie
              title={movie.title}
              year={movie.year}
              mins={movie.mins}
              delete={()=>this.deleteMovieHandler(index)}/>
          })}
        </div>
      )
      showMoviesButton = "Hide Movies"; //Changes the value of show/hide movies button
    }

    let addMovie = null;
    if(this.state.newMovie != null){ // avoids adding empty movies
      addMovie = this.addMovieHandler; //addMovie saves a reference to addMovieHandler method
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Movies App</h1>
        </header>
        <MovieCreator
           titleInput={(event)=>this.newMovieTitle(event)}
           yearInput={(event)=>this.newMovieYear(event)}
           minsInput={(event)=>this.newMovieMins(event)}
           addMovie={addMovie}/>
        <button onClick={this.toggleMoviesHandler} id="ShowMovieButton">{showMoviesButton}</button>

        <div className="MovieList"> {/*This should be a component*/}
          {movieList}
        </div>

      </div>
    );
  }
}

//Future updates: - create MovieList component wich contains Movie components
//                - editMovit() method !
export default App;
