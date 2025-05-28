import Card from "../components/Card"
import Button from "../components/Button"
import { servicesText } from "../static/TextContentFR"

const ServicesSection = () => {
  return (
    <section className=" relative 
    w-full h-full
    lg:px-64 px-16 py-16
    flex flex-col gap-16 justify-between   
    bg-white">

        <h1 className=" text-7xl font-black">
            {servicesText.title}
        </h1>
        
        <p className="mb-12 text-lg">
            {servicesText.description}
        </p>
        
        <div className="w-full flex flex-col gap-10 ">
            <div className="w-full flex flex-col sm:flex-row gap-10 ">
                <Card cardTitle={servicesText.cards[0].title} cardDescription={servicesText.cards[0].description} />
                <Card cardTitle={servicesText.cards[1].title} cardDescription={servicesText.cards[1].description} />
            </div>

            <div className=" w-full flex flex-col sm:flex-row gap-10 ">
                <Card cardTitle={servicesText.cards[2].title} cardDescription={servicesText.cards[2].description} />
                <Card cardTitle={servicesText.cards[3].title} cardDescription={servicesText.cards[3].description} />
                <Card cardTitle={servicesText.cards[4].title} cardDescription={servicesText.cards[4].description} />
            </div>
        </div>

        

        <div className="flex flex-col gap-5 items-center">
            <p>
                {servicesText.contactText}
            </p>
            <Button buttonText={servicesText.buttonText} buttonLink={servicesText.buttonLink} />
        </div>
        
    </section>
  )
}

export default ServicesSection