import React from 'react';
import Movie from '../Movie/Movie';

const movieList = (props)=>{
  return(
    <div className="MovieList">
      {props.movies.map((movie, index) =>{
        return <Movie
          title={movie.title}
          year={movie.year}
          mins={movie.mins}
          delete={()=>props.delete(index)}/>
      })}
    </div>
  )
}


export default movieList;
