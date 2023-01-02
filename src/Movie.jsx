import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Product from './Product';
import axios from "axios";
import "./Movie.css";

export default function Movie(props) {

  const [movieCount, setMovieCount] = useState(1);
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState();

  // useEffect(() => {
  //   let url = `http://localhost:2000/movies/`;
  //   fetch(url)
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setMovie(data);
  //     });
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:2000/movies/").then(async(res) => setMovies(res.data))
  },[])

    return (
      <div>
      {movies.map((movie) => (
        <Product id={movie.id} img={movie.Poster_Link} title={movie.Series_Title} year={movie.Released_Year}/>
      ))}
      </div>
    );
  }
  