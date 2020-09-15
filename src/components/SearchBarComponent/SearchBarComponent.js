import React from "react";
import "../../styles/SearchBarComponent.css";


class SearchBarComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      srchQuery:""
    }
  }

  handleChange=(e)=>{
    this.setState({
      srchQuery:e.target.value
    })
  }

  handleSearch=(e)=>{
    if(this.state.srchQuery===""){
      alert("Please enter a value...");
      return;
    }
    this.props.handleMovieSearch(this.state);
  }

  render(){
    return(
      <div className="search-bar">
        <input type="text" onChange={this.handleChange}/>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    )
  }
}

export default SearchBarComponent;