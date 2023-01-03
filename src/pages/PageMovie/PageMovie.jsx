import React from 'react';
import { useEffect, useState } from "react";
import "./pageMovie.css"
import axios from "axios";

export default function PageMovie(props) {
 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2000/movies/${props.id}`).then(async(res) => setMovies(res.data))
  },[])


  return (
    <div className='Movie'>
        <div className="poster"><img src={movies.Poster_Link} alt="" /></div>
          <div className="movieInf">
            <p>{movies.Series_Title} ({movies.Released_Year})</p>
            <p className="inf">Ratings: IMDb: {movies.IMDB_Rating}, MetaScore: {movies.Meta_score}</p>
          </div>
      </div>
  )
}