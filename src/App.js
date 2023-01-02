import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Top1000 from './pages/Top1000/Top1000'
import AboutUs from './pages/AboutUs/AboutUs'
import PageMovie from './pages/PageMovie/PageMovie'
import NotFound from './pages/AboutUs/AboutUs'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path={'/'}></Route>
        <Route element={<Top1000 />} path={'/top1000'}></Route>
        <Route element={<AboutUs />} path={'/aboutus'}></Route>
        <Route element={<NotFound />} path={'/*'}></Route>
        <Route element={<PageMovie />} path={'/pagemovie'}></Route>
      </Routes>
    </>
  );
}

export default App;
