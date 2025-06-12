import './App.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactLenis } from 'lenis/react'
import { Route, Routes } from 'react-router';

import Navbar from './sections/Navbar'
import Footer from './sections/Footer';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';



gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <>
      <ReactLenis root />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      

      <Footer />
    </>
  )
}

export default App
