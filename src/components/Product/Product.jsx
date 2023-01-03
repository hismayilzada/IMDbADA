import React from "react";
import { NavLink } from "react-router-dom";
import "../../components/Movie/Movie.css"

export default function Product(props) {
  return (
    <div className="List" id={props.id}>
          <div className="poster"><img src={props.img} alt="" /></div>
          <div className="movieInf">
            <NavLink className="movieTitle" to={`/IMDbADA/movie/${props.id}`}>{props.id}. {props.title} ({props.year})</NavLink>
            <p className="inf">Ratings: IMDb: {props.imdb}, MetaScore: {props.meta}</p>
            <p className="inf">Overview: {props.overview}</p>
          </div>
        </div>
  );
}
