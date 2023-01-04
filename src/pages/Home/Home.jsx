import  React from 'react';
import { NavLink } from "react-router-dom";
import "./Home.css";
import logoBig from "../../images/Logos/png/logo-color.png"

export default function Home() {
    return <div>
        <div className="HomeCard">
          <h1 className="welcome">Welcome to</h1>
          <NavLink className="homeImg" to="/IMDbADA/top1000"><img className='logoBig' src={ logoBig } alt="test" /></NavLink>
          <p className="homeInf">Where to look movie's rank? A movie evening always starts with a very time-consuming and frustrating search for which movies to watch. IMDbADA is there to help you find all 
the best-ranking movies you can stream legally and make your life easier.</p>
        </div>
        
      </div>;

}
