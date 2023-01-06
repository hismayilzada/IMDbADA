import React from 'react';
import { useEffect, useState } from "react";
import "./pageMovie.css"
import axios from "axios";

export default function PageMovie(props) {
 
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2000/movies/${props.id}`).then(async(res) => setMovies(res.data))
  })


  return (
    <div className='Movie'>
          <div className="movieInf">
            <p className='info-title'>{movies.Series_Title}</p>
            <p className="info year">{movies.Released_Year}  {movies.Certificate} { movies.Runtime}</p>
            <div className="flex">
              <div className="PosterDet"><img src={movies.Poster_Link} alt="" /></div>
              <div className="other">
                <div className="rating">
                  <p className="info imdb">IMDb Rating: ⭐️{movies.IMDB_Rating} ( {movies.No_of_Votes} votes )</p>
                  <p className="info meta">MetaScore: {movies.Meta_score}</p>
                </div>
                <p className="info genre">Genre: { movies.Genre }</p>
                <p className="info director">Director: { movies.Director }</p>
                <p className="info stars">Stars:  { movies.Star1 }, { movies.Star2 }, { movies.Star3 }, { movies.Star4 }, </p>
                <p className="info-overview">Overview: { movies.Overview }</p>
              </div>
            </div>
          </div>
      </div>
  )
}