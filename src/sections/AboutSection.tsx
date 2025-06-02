import Button from "../components/Button"
import { aboutText } from "../static/TextContentFR"

const AboutSection = () => {
  return (
    <section className="section-container bg-white">
        <div className="absolute left-0 bottom-0 w-full h-[128px] bg-transparent -mb-1 z-10">
            <svg className="w-full h-full block fill-white" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,90 100,100 0,100" />
            </svg>
        </div>

        <h1 className="section-title">
          {aboutText.title}
        </h1>

        <p>
          {aboutText.description}
        </p>

        <Button buttonText={aboutText.buttonText} buttonLink="#" />
    </section>
  )
}

export default AboutSection