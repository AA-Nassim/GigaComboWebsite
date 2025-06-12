import { aboutDetailsText } from "../static/TextContentFR"

const AboutDetailedSection = () => {
  return (
    <section className="section-container bg-white">
        <h1 className="section-title">
            {aboutDetailsText.title}
        </h1>

        <p>
            {aboutDetailsText.description}
        </p>
        
    </section>
  )
}

export default AboutDetailedSection