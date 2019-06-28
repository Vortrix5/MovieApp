import React from 'react'
import MovieCard from './MovieCard'


export default class MovieCards extends React.Component {

    fetch = require("node-fetch");
    
    render() {
        return (
            this.props.movies.map(el => {
                return <MovieCard title={el.title} year={el.year} desc={el.synopsis} img={el.images.poster}/>
            })
        )
    }
}