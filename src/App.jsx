import  React from 'react';
import { Routes, Route } from "react-router";
import './App.css';
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/Home/Home";
import Top100 from "./pages/Top1000/Top1000";
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import Movie1 from './pages/Movie1/Movie1';

function App() {
  return (
  <>
  <NavBar />
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:page" element={<Movie1 />} />
        <Route path="/top1000" element={<Top100 />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/aboutus" element={<AboutUs />} />
  </Routes>
  </>
  )
  
}

export default App;


// npx json-server --watch ./src/recources/imdbtop1000.json --port 2000