import AboutDetailedSection from "../sections/AboutDetailedSection"
import TeamSection from "../sections/TeamSection"

const AboutPage = () => {
  return (
    <div className="pt-16">
        <AboutDetailedSection />

        <div className="w-full h-[128px] bg-white -mb-1 z-10">
          <svg className="w-full h-full block fill-red-600" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,90 100,0 100,100 0,100" />
          </svg>
        </div>

        <TeamSection />

        <div className="w-full h-[128px] bg-red-600 -mb-1 z-10">
            <svg className="w-full h-full block fill-amber-600" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,90 100,100 0,100" />
            </svg>
      </div>
    </div>
  )
}

export default AboutPage