import HeroSection from '../sections/home/HeroSection'
import AboutSection from '../sections/home/AboutSection'
import ServicesSection from '../sections/home/ServicesSection'
import WorkSection from '../sections/home/WorkSection'
import ContactSection from '../sections/home/ContactSection';

const HomePage = () => {
  return (
    <div>
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

      <div className="w-full h-[128px] bg-red-600 -mb-1 z-10">
          <svg className="w-full h-full block fill-white" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,90 100,0 100,100 0,100" />
          </svg>
      </div>

      <WorkSection />
      
      <div className="w-full h-[128px] bg-white -mb-1 z-10">
            <svg className="w-full h-full block fill-amber-400" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,90 100,100 0,100" />
            </svg>
      </div>

      <ContactSection />

      <div className="w-full h-[128px] bg-amber-400 -mb-1 z-10">
            <svg className="w-full h-full block fill-amber-600" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,90 100,100 0,100" />
            </svg>
      </div>
      
    </div>
  )
}

export default HomePage