// Version full screen video background
const HeroSection = () => {
  return (
    <section className="sticky top-0 left-0 -z-10
    h-screen w-screen 
    flex flex-col items-center justify-center text-center text-white ">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover"
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" 
        typeof="video/mp4" autoPlay muted loop />
      </div>

      <div className="video-content space-y-2 z-10">
        <h1 className="text-7xl font-black ">BIG BOGOS BINTED</h1>
        <h3 className="font-light text-3xl">TRALALERO TRALALA</h3>
      </div>
    </section>
  )
}

export default HeroSection