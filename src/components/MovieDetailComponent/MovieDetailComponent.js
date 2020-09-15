import React from "react";

import "../../styles/MovieDetailComponent.css";

const MovieDetailComponent=(props)=>{
    if(Object.keys(props.details).length>0){
      console.log();
      return(
        <div className="movie-detail-box">
          <p><b>{props.details.title}</b></p>
          <p><b>Released on </b>{props.details.release_date}</p>
          <p><b>Genre: </b>{props.details.genres.map(genre=>genre.name).join(", ")}</p>
          <p><b>{props.details.vote_average*10}</b>% people liked it</p>
          <p><b>Duration: </b>{Math.floor(props.details.runtime/60)} hours and {props.details.runtime%60} mins</p>
          <p><b>Budget: </b>{props.details.budget}</p>
          <p><b>About</b></p>
          <p>{props.details.overview}</p>
        </div>
      )
    } 
  return(
    <p>Select Movie</p>
  )
}

export default MovieDetailComponent;