import React from 'react';
import './MovieCreator.css'

const movieCreator = (props)=>{
  return(
    <div className="MovieCreator">
      {/*<h3>New Movie</h3>*/}
      <p> Title   <input type="text" onChange={props.titleInput} className="input"/></p>
      <p> Year    <input type="text" onChange={props.yearInput}className="input"/></p>
      <p> Mins    <input type="text" onChange={props.minsInput}className="input"/></p>
      <button onClick={props.addMovie}>Add</button>
    </div>
  );
}

export default movieCreator;
