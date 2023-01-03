import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logos/png/logo-color.png"
import "./NavBar.css";

function NavBar(){
    return <nav>
    <img className='logoHeader' src={logo} alt="IMDbADA Logo" />
    <NavLink class="headerLinks" to="/IMDbADA/">Home</NavLink>
    <NavLink class="headerLinks" to="/IMDbADA/top1000">Top 1000</NavLink>
    <NavLink class="headerLinks" to="/IMDbADA/aboutus">About Us</NavLink>
  </nav>
}

export default NavBar;