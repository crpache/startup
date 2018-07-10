import React from 'react';
import './Movie.css'

const movie = (props)=>{
  return(
    <div className="Movie">
      <h3 id="MovieTitle">{props.title}</h3>
      <p>{props.year}, {props.mins} mins</p>
      <button className="MovieButton" onClick={props.delete}>Remove</button>
    </div>
  );
}


export default movie;
