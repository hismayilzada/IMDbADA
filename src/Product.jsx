import React from "react";
import PageMovie from "./PageMovie";
import { NavLink } from "react-router-dom";

export default function Product(props) {
  console.log(props)
  return (
    <div className="List" id={props.id}>
          <div className="poster"><img src={props.img} alt="" /></div>
          <div className="movieInf">
            <NavLink className="movieTitle" to={`/movie/${props.id}`}>{props.id}. {props.title} ({props.year})</NavLink>
            <p className="inf">Ratings: IMDb: {props.IMDB_Rating}, MetaScore: {props.Meta_score}</p>
            <PageMovie id={props.id}/>
          </div>
        </div>
  );
}
