import "./Navbar.scss"
import {Link } from 'react-router-dom'
// import logo from './img/Logos/png/logo-color.png'
const Navbar = () => {
  return (
    <nav className='navbar'>
    <img className='logoHeader' src={''} alt="IMDbADA Logo" />
    <Link className="headerLinks" to="/">Home</Link>
    <Link className="headerLinks" to="/top1000">Top 1000</Link>
    <Link className="headerLinks" to="/aboutus">About Us</Link>
  </nav>
  )
}

export default Navbar 

