import React from "react";
import "../../styles/MovieListComponent.css";

const MovieListComponent=(props)=>{
  return(
    <div className="movie-box" onClick={()=>props.handleClick(props.id)}>
      <div className="line-1">
        <div className="img-box">
          <img src={"https://image.tmdb.org/t/p/w94_and_h141_bestv2"+props.imgpath} alt=""/>
        </div>
        <div className="text">
          <p>{props.name}</p>
          <p>Rated: {props.rating}/10</p>
          <p>Released on {props.release}</p>
        </div>
      </div>
      <div className="line-2">{props.about.slice(0,50)+"..."}</div>
    </div>
  )
}

export default MovieListComponent;