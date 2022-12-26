import React from "react";
import { NavLink } from "react-router-dom";
import logo from './img/Logos/png/logo-color.png'
import './App.css';
import "./NavBar.css";

function NavBar(){
    return <nav>
    <img className='logoHeader' src={logo} alt="IMDbADA Logo" />
    <NavLink class="headerLinks" to="/">Home</NavLink>
    <NavLink class="headerLinks" to="/top100">Top 100</NavLink>
    <NavLink class="headerLinks" to="/aboutus">About Us</NavLink>
  </nav>
}

export default NavBar;