import React from 'react'

import MovieCard from './MovieCard'





export default class MovieCards extends React.Component {



    fetch = require("node-fetch");

    onDelete(){
        console.log("works");
    }

    render() {

        return (

            this.props.movies.map((el,i) => {

                return <MovieCard index={i} Deleting={this.props.Deleted} title={el.Title} year={el.Year} desc={el.Plot} img={el.Poster} trailer={el.trailer} date={el.Released}/>

            })

        )

    }

}

