import React from "react";
// import { useEffect, useState } from "react";
import Product from '../Product/Product';
// import axios from "axios";
import "./Movie.css";

export default function Movie({movies}) {

    return (
      <div>
      {movies.map((movie) => (
        <Product 
          id={movie.id} 
          img={movie.Poster_Link} 
          title={movie.Series_Title} 
          year={movie.Released_Year}
          imdb={movie.IMDB_Rating}
          meta={movie.Meta_score}
          overview={movie.Overview}
          genre={movie.Genre}
          runtime={movie.Runtime}
          />
          
          ))}
          
      </div>
    );
  }
