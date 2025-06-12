import Card from "../../components/Card"
import Button from "../../components/Button"
import { servicesText } from "../../static/TextContentFR"

const ServicesSection = () => {
  return (
    <section className="section-container bg-red-600 text-white">

        <h1 className="section-title">
            {servicesText.title}
        </h1>
        
        <p className="w-full text-lg">
            {servicesText.description}
        </p>
        
        <div className="w-full flex flex-col justify-center items-center gap-10 ">
            <div className="w-full flex flex-col justify-center md:flex-row gap-10 ">
                <Card cardTitle={servicesText.cards[0].title} cardDescription={servicesText.cards[0].description} />
                <Card cardTitle={servicesText.cards[1].title} cardDescription={servicesText.cards[1].description} />
            </div>

            <div className=" w-full flex flex-col justify-center md:flex-row gap-10 ">
                <Card cardTitle={servicesText.cards[2].title} cardDescription={servicesText.cards[2].description} />
                <Card cardTitle={servicesText.cards[3].title} cardDescription={servicesText.cards[3].description} />
                <Card cardTitle={servicesText.cards[4].title} cardDescription={servicesText.cards[4].description} />
            </div>
        </div>

        

        <div className="w-full flex flex-col gap-5 items-center">
            <p className="w-full text-lg">
                {servicesText.contactText}
            </p>
            <Button buttonText={servicesText.buttonText} buttonColor="yellow" buttonLink={servicesText.buttonLink} />
        </div>
        
    </section>
  )
}

export default ServicesSection