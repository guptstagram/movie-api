import React from 'react';
import axios from "axios";
import './App.css';

import SearchBarComponent from "./components/SearchBarComponent/SearchBarComponent";
import MovieListsComponent from "./components/MovieListsComponent/MovieListsComponent";
import MovieDetailComponent from "./components/MovieDetailComponent/MovieDetailComponent";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movieList:[],
      selectedMovie:{}
    }
    // this.apiKey=process.env.MOVIEDB_API;
    this.apiKey="480f9e99993fbcb35c87caa918c697b5";
  }

  handleMovieSearch=(qry)=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${qry.srchQuery}`).then((response=>{
      // console.log(response.data.results);
      this.setState({
        movieList:response.data.results
      })
    }))
  }

  handleMovieClick=(id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`).then(response=>{
      // console.log(response.data);
      this.setState({
        selectedMovie:response.data
      })
    })
  }

  render(){
    return (
    <>
     <SearchBarComponent handleMovieSearch={this.handleMovieSearch}/>
     <div className="content">
        <div className="movie-list">
          <MovieListsComponent handleMovieClick={this.handleMovieClick} movieList={this.state.movieList}/>
        </div>
        <div className="movie-detail">
          <MovieDetailComponent details={this.state.selectedMovie}/>
        </div>
     </div>
    </>
  );
  }
}

export default App;
