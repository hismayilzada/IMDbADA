import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logos/png/logo-color.png"
import "./NavBar.css";

function NavBar(){
    return <nav>
    <img className='logoHeader' src={logo} alt="IMDbADA Logo" />
    <NavLink class="headerLinks" to="/">Home</NavLink>
    <NavLink class="headerLinks" to="/top1000">Top 1000</NavLink>
    <NavLink class="headerLinks" to="/aboutus">About Us</NavLink>
  </nav>
}

export default NavBar;