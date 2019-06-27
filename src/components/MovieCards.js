import React from 'react'
import MovieCard from './MovieCard'
import Loading from './Loading'


export default class MovieCards extends React.Component {

    fetch = require("node-fetch");
    moviesArray = []
    state = { 
        movies: this.moviesArray,
        loaded: false 
    }

    
    componentDidMount(){
        fetch("https://tv-v2.api-fetch.website/movies/1?sort=rating&order=-1&genre=all&keywords=", {
            method: "GET"
        }).then(res => res.json())
            .then(result => {
                result.forEach(el => {
                    this.moviesArray.push(el)
                });
                this.setState({
                    movies: this.moviesArray,
                    loaded: true
                })
            })
    
    }

    render() {
        return (
        
            (this.state.loaded)?
            this.moviesArray.map(el => {
                return <MovieCard title={el.title} year={el.year} desc={el.synopsis} img={el.images.poster}/>
            }): <Loading/>
        )
    }
}