import React from "react";
import "./Movie.css";

export default function Movie(props) {
    return (
      <div className="List">
          <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg" alt="" />
          <a className="movieTitle">1. The Shawshank Redemption (1994)</a>
          <p className="rating">IMDb: 9.3  Meta Score: 80%</p>

        </div>
    );
  }
  