import  React from 'react';
import Data from "./recources/imdb_top_1000.json";
import Movie from './Movie';
import "./Top100.css";

console.log(Data)

export default function Top100() {
    return <div className="top">
      <div className="bigCard">
        <h1>TOP 1000</h1>
        <h3>These are best movies by rating in IMDb!</h3>
        <Movie></Movie>
      </div>
    </div>;
  }
  