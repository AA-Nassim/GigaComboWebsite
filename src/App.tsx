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

      <div className="w-full h-[128px] bg-transparent -mb-1 z-10">
          <svg className="w-full h-full block fill-white" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,90 100,100 0,100" />
          </svg>
      </div>

      <AboutSection />

      <div className="w-full h-[128px] bg-white -mb-1 z-10">
          <svg className="w-full h-full block fill-red-600" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,90 100,0 100,100 0,100" />
          </svg>
      </div>

      <ServicesSection />

      <WorkSection />
      
      <ContactSection />

      <div className="w-full h-[128px] bg-white -mb-1 z-10">
            <svg className="w-full h-full block fill-amber-400" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,90 100,100 0,100" />
            </svg>
      </div>

      <Footer />
    </>
  )
}

export default App
