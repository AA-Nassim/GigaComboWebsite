import ProfileCard from "../../components/ProfileCard"
import { teamText } from "../../static/TextContentFR"

const TeamSection = () => {
  return (
    <section className="section-container bg-red-600 text-white">
        <h1 className="section-title">
            {teamText.teamTitle}
        </h1>
        
        <p>
            {teamText.teamDescription}
        </p>

        <div className="w-full flex flex-col justify-center md:flex-row gap-10 ">
            <ProfileCard img="https://t4.ftcdn.net/jpg/00/56/96/27/360_F_56962791_o8syVNM8Ojo19TxJhLy1JW6RPHOin2zS.jpg" name="Zbeub" description="Big chungus"/>
            <ProfileCard img="https://t4.ftcdn.net/jpg/00/56/96/27/360_F_56962791_o8syVNM8Ojo19TxJhLy1JW6RPHOin2zS.jpg" name="Zbeub" description="Big chungus"/>
            <ProfileCard img="https://t4.ftcdn.net/jpg/00/56/96/27/360_F_56962791_o8syVNM8Ojo19TxJhLy1JW6RPHOin2zS.jpg" name="Zbeub" description="Big chungus"/>
        
        </div>
    </section>
  )
}

export default TeamSection