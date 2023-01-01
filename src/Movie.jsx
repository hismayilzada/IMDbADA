import React from "react";
import { NavLink } from "react-router-dom";
import "./Movie.css";
// import data from "./recources/imdb_top_1000.json"



export default function Movie(props) {
    // console.log(data);
    return (
      <div className="List">
          <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg" alt="" />
          <NavLink className="movieTitle" to="/top100/1">1. The Shawshank Redemption (1994)</NavLink>
          <p className="rating">IMDb: 9.3  Meta Score: 80%</p>
        </div>
    );
  }
  