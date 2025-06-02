import BlogCard from "../components/BlogCard"

const WorkSection = () => {


  return (
    <section className="section-container bg-white">
        <h1 className="section-title"> 
            OUR WORK 
        </h1>
        <div className=" w-full flex flex-col md:flex-row gap-16 lg:gap-32">
          <div className="flex-1/2 flex flex-col gap-5">
            <BlogCard img="https://picsum.photos/1080" 
            title="Shockbar1" 
            description="chokbarino birgorinoo using tralalero tralalero" 
            link="#"/>
            <BlogCard img="https://picsum.photos/1080" 
            title="Shockbar2" 
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. bigosisosi" 
            link="#"/>
          </div>
          <div className="flex-1/2 flex flex-col gap-5 md:mt-32">
            <BlogCard img="https://picsum.photos/1080" 
            title="Shockbar3" 
            description="bouleloli louliloli malisokiposito louliloli lorem ipsum dolor sit amet consectetur adipisicing elit." 
            link="#"/>
            <BlogCard img="https://picsum.photos/1080" 
            title="Shockbar4" 
            description="franchouillou louliloli malisokiposito louliloli lorem ipsum dolor sit amet consectetur adipisicing elit. tripo tropa" 
            link="#"/>
          </div>
        </div>
        
    </section>
  )
}

export default WorkSection