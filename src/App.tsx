import { ReactLenis } from 'lenis/react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'

function App() {

  return (
    <>
      <ReactLenis root />
      <Navbar />
      <HeroSection />
      <div className='h-[200vh] bg-red-300'>

      </div>
    </>
  )
}

export default App
