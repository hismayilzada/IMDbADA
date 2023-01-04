import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logos/png/logo-color.png"
import "./NavBar.css";

function NavBar(){
    return <nav className="navMenu">
    <img className='logoHeader' src={logo} alt="IMDbADA Logo" />
    <NavLink className="headerLinks" to="/IMDbADA/">Home</NavLink>
    <NavLink className="headerLinks" to="/IMDbADA/top1000">Top 1000</NavLink>
    <NavLink className="headerLinks" to="/IMDbADA/aboutus">About Us</NavLink>
    <div class="dot"></div>
  </nav>
}

export default NavBar;