import React from 'react';
import './App.css';
import MovieCards from './components/MovieCards'
import NavBar from './components/NavBar'
import Loading from './components/Loading'
import Nothing from './components/Nothing'


export default class App extends React.Component {

   moviesArray = []
   found = false
   state = {
      movies: this.moviesArray,
      loaded: false,
      nothingFound: this.found,
      index : ""
   }

   constructor(props) {
      super(props)
      this.searchUpdate = this.searchUpdate.bind(this)
   }

   fetchMovies(keyWord) {
      this.setState({
         moviesArray: [],
         loaded: false,
         nothingFound: false
      })
      fetch("https://tv-v2.api-fetch.website/movies/1?sort=rating&order=-1&genre=all&keywords=" + keyWord, {
         method: "GET"
      }).then(res => res.json())
         .then(result => {
            (result.length === 0)?(this.found = true):(this.found = false)
            this.moviesArray = []
            result.forEach(el => {
               this.moviesArray.push(el)
            });
            this.setState({
               movies: this.moviesArray,
               loaded: true,
               nothingFound: this.found
            })
         })
   }

   searchUpdate(value) {
      console.log(this.moviesArray)
      this.fetchMovies(value)
      
   }

   componentDidMount() {
      this.fetchMovies("")
   }
   
   onDelete(){      
      console.log(this.state.movies)
      console.log("works");
  }

   render() {
      return (
         <>
            <NavBar searchUpdate={this.searchUpdate} />
            {(this.state.loaded) ? ((this.state.nothingFound)?(<Nothing/>):(<MovieCards movies={this.moviesArray} Deleted={this.onDelete}/>))
            :(<Loading/>)}
         </>
      )
   }
}