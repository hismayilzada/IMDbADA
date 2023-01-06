import  React from 'react';
import { useEffect, useState } from "react";
import Movie from '../../components/Movie/Movie';
import Pagination from "../../components/Pagination/Pagination"
import axios from "axios";
import "./Top1000.css";

export default function Top100() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(40);
  
  useEffect(() => {
    axios.get(`http://localhost:2000/movies`).then(async(res) => setMovies(res.data))
  },[])

  const lastMovie = page * perPage;
  const firstMovie = lastMovie - perPage;
  const currentMovie = movies.slice(firstMovie, lastMovie)

  const pan = pageNum => setPage(pageNum);

    return <div className="top">
      <div className="bigCard">
        <h1>TOP 1000</h1>
        <h3>These are best movies by rating in IMDb!</h3>
        <h3>Page: {page}</h3>
        <Pagination
            perPage={perPage}
            allMovies = {movies.length}
            pan = {pan} />
        <Movie movies={currentMovie}></Movie>
      </div>
    </div>;
  }
  