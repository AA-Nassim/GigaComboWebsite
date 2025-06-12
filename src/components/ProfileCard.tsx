interface ProfileCardProps {
    img: string; 
    name: string;
    description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({img, name, description}) => {
  return (
    <div className="relative max-w-sm mx-auto overflow-hidden bg-white rounded-lg hover:shadow-md hover:shadow-amber-600 transition-all ease-in-out duration-300  hover:scale-105">
        
        <div className="relative">
            <img className="w-full h-48 object-cover" src={img} alt="Profile Image" />
        </div>
        <div className="px-6 py-4">
            <div className="text-xl font-semibold text-gray-800">{name}</div>
            <p className="text-gray-600">{description}</p>
        </div>
        
    </div>
  )
}

export default ProfileCard