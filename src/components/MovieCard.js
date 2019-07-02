import React from 'react';
import "./style.css";
import MovieButtons from "./MovieButtons";

class MovieCard extends React.Component {
    onDelete(){
        console.log("works");
    }
     render(){
        let index = this.props.index;
        let imgsrc = "url(" + this.props.img + ")"
        let name = this.props.title.substring(0, 20)
        let date = this.props.date
        let d = new Date(date)
        let releaseDate = d.getDate() + '/' + (d.getMonth() + 1) + '/' + this.props.year;

    return (
        <>
            
            <div className="container" style={{ display: "inline-block" }}>


                <div className="movie-card" >
                    <div className="movie-header manOfSteel" style={{ background: imgsrc }}>
                        <div className="header-icon-container"  >
                            <a href="..">
                                <i className="material-icons header-icon">.</i>
                            </a>
                        </div>
                    </div>
                    <div className="movie-content">
                        <div className="movie-content-header">
                            <a href={this.props.trailer}>
                                <h3 class="movie-title">{name}</h3>
                            </a>
                            <div></div>
                        </div>
                        <div className="movie-info">
                            <div className="info-section" style={{ float: "left" }}>
                                <label>Release Date</label>
                                <span>{releaseDate}</span>
                                <label>{index}</label>
                            </div>
                        </div>
                        <MovieButtons onDelete={this.props.Deleting}/>
                    </div>
                </div>
            </div>
        </>
    );
     }
}

export default MovieCard;