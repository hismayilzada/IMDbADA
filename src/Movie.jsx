import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Product from './Product';
import "./Movie.css";

export default function Movie(props) {

  const [movieCount, setMovieCount] = useState(1);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    let url = `http://localhost:2000/movies/${movieCount}`;
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [movieCount]);

    console.log(movie);

    return (
      <div className="List">
          <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg" alt="" />
          <NavLink className="movieTitle" to="/movie/1">1. The Shawshank Redemption (1994)</NavLink>
        </div>
    );
  }
  