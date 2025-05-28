import Button from "../components/Button"
import { aboutText } from "../static/TextContentFR"

const AboutSection = () => {
  return (
    <section className="w-full bg-white 
    flex flex-col gap-16 items-center
    lg:px-64 px-16 py-16
    ">
        <div className="absolute left-0 bottom-0 w-full h-[64px] bg-transparent -mb-1 z-10">
            <svg className="w-full h-full block fill-white" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,90 100,100 0,100" />
            </svg>
        </div>

        <h1 className="text-7xl font-black ">
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