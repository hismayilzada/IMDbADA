import React from 'react';
import { NavLink } from "react-router-dom";
import "./Home.css";
import logoBig from "../../images/Logos/png/logo-color.png"

export default function Home() {
  return <div>
    <div className="HomeCard">
      <h1 className="welcome">Welcome to</h1>
      <NavLink className="homeImg" to="/IMDbADA/top1000"><img className='logoBig' src={logoBig} alt="test" /></NavLink>
      <p className="homeInf">{`Where to look movie's rank? A movie evening always starts with a very time-consuming and 
          frustrating search for which movies to watch. IMDbADA is there to help you find all the best-ranking movies you can 
          stream legally and make your life easier.`}</p>
      <p className="basicInfo">{`This project is kind of the same structure as the IMDb. It shows the top 
          1000 movies and series ranked accordingly. You can see the poster, name, IMDB rating, genre, runtime, and brief information 
          about movies and series. Go to the About Us page to see the member names, bios, and links to their GitHub accounts and 
          personal web pages. If you have questions or anything to add, please contact us using the `}<a className="homehyperl" href="/IMDbADA/AboutUs">About Us Page</a></p>
      <iframe className="ytVid" width="560" height="315" src="https://www.youtube.com/embed/nn4trP0jask" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

  </div>;

}
