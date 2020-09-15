import React from "react";
import "../../styles/MovieListsComponent.css";

import MovieListComponent from "../MovieListComponent/MovieListComponent";

const MovieListsComponent=(props)=>{
  // const movies=props.movieList.length?(
  //   props.movieList.map(movie=>{
  //   return(
  //     <MovieListComponent key={movie.id} name={movie.title} rating={movie.vote_average} release={movie.release_date}/>
  //   )
  // })):(
  //   <p>Search for Movie</p>
  // )
  const handleClick=(id)=>{
    props.handleMovieClick(id);
  }
  return(
    props.movieList.map(movie=>{
      return(
        <MovieListComponent key={movie.id} id={movie.id} name={movie.title} rating={movie.vote_average} release={movie.release_date} about={movie.overview} imgpath={movie.poster_path} handleClick={handleClick}/>
      )
    })
  )
}

export default MovieListsComponent;