import React from "react";

export default function Product(props) {
  return (
    <div className="movie-info">
      <h3 className="movie-info--title">{props.Series_Title}</h3>
      <p className="movie-info--year">Release Date: ${props.Released_Year}</p>
            <img src={props.Poster_Link} alt="poster" />
    </div>
  );
}
