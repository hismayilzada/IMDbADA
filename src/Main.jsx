import  React from 'react';
import AboutUs from "./AboutUs";
// import "./Main.css";
import About from "./About";

function Main() {
  return (
    <div className="about-list">
      {About.map((about) => (
        <AboutUs id={about.id} name={about.name} img={about.img} />
      ))}
    </div>
  );
}

export default Main;
