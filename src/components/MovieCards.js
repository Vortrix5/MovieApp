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

                return <MovieCard index={i} Deleting={this.props.Deleted} title={el.title} year={el.year} desc={el.synopsis} img={el.images.banner} trailer={el.trailer} date={el.released}/>

            })

        )

    }

}

