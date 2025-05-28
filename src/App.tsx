import { ReactLenis } from 'lenis/react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'

function App() {

  return (
    <>
      <ReactLenis root />

      <Navbar />

      <HeroSection />

      <AboutSection />

      <ServicesSection />
      
      <div className='h-[200vh] bg-white'>

      </div>
    </>
  )
}

export default App
