import  React from 'react';
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Top100 from "./pages/Top1000/Top1000";
import AboutUs from './pages/AboutUs/AboutUs';
import NotFound from './pages/NotFound/NotFound';
import Movie1 from './pages/Movie1/Movie1';

function App() {
  return (
  <>
  <NavBar />
  <Routes>
        <Route path="/IMDbADA/" element={<Home />} />
        <Route path="/IMDbADA/movie/:page" element={<Movie1 />} />
        <Route path="/IMDbADA/top1000" element={<Top100 />} />
        <Route path="/IMDbADA/*" element={<NotFound/>} />
        <Route path="/IMDbADA/aboutus" element={<AboutUs />} />
  </Routes>
  </>
  )
  
}

export default App;


// npx json-server --watch ./src/recources/imdbtop1000.json --port 2000
// npx json-server --watch ./src/recources/FormInput.json --port 4000
// npm start
// Github Pages Deployment: npm run deploy 