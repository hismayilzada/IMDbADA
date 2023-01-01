import  React from 'react';
import "./AboutUs.css";

function AboutUs(props) {
  return (
    <div className="info">
      <img src={props.img} alt="img" />
      <p className="info--name">{props.name}</p>
    </div>
  );
}

export default AboutUs;

  