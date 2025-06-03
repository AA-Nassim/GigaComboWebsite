import BlogCard from "../components/BlogCard"
import { workText } from "../static/TextContentFR"

const WorkSection = () => {


  return (
    <section className="section-container bg-white">
        <h1 className="section-title"> 
          {workText.title} 
        </h1>
        <p>
          {workText.description}
        </p>
        <div className=" w-full flex flex-col md:flex-row gap-16 lg:gap-32">
          <div className="flex-1/2 flex flex-col gap-5">
            <BlogCard img={workText.cards[0].img}
            title={workText.cards[0].title}
            description={workText.cards[0].description}
            link={workText.cards[0].link}/>

            <BlogCard img={workText.cards[1].img}
            title={workText.cards[1].title}
            description={workText.cards[1].description}
            link={workText.cards[1].link}/>
          </div>
          <div className="flex-1/2 flex flex-col gap-5 md:mt-32">
            <BlogCard img={workText.cards[2].img}
            title={workText.cards[2].title}
            description={workText.cards[2].description}
            link={workText.cards[2].link}/>

            <BlogCard img={workText.cards[3].img}
            title={workText.cards[3].title}
            description={workText.cards[3].description}
            link={workText.cards[3].link}/>
          </div>
        </div>
        
    </section>
  )
}

export default WorkSection