import  React from 'react';
import { Routes, Route } from "react-router";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Top100 from "./Top100";
import AboutUs from './AboutUs';
import NotFound from './NotFound';
import PageMovie from './pageMovie';

function App() {
  return (
  <>
  <NavBar />
  <Routes>
        
        <Route path="/" element=<Home /> />
        <Route path="/top100/:pagemovie" element=<PageMovie /> />
        <Route path="/top100" element=<Top100 /> />
        <Route path="*" element=<NotFound/> />
        <Route path="/aboutus" element=<AboutUs /> />
  </Routes>
  </>
  )
  
}

export default App;