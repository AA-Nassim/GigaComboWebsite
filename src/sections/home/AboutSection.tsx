import Button from "../../components/Button"
import { aboutText } from "../../static/TextContentFR"

const AboutSection = () => {
  return (
    <section className="section-container bg-white">
        

        <h1 className="section-title">
          {aboutText.title}
        </h1>

        <p>
          {aboutText.description}
        </p>

        <Button buttonText={aboutText.buttonText} buttonLink="about" />
    </section>
  )
}

export default AboutSection