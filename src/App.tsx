import './App.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactLenis } from 'lenis/react'

import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import WorkSection from './sections/WorkSection'
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';


gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <>
      <ReactLenis root />

      <Navbar />

      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <WorkSection />
      
      <ContactSection />

      <Footer />
    </>
  )
}

export default App
