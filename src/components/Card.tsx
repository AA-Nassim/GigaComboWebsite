interface CardProps {
    cardTitle: string;
    cardDescription: string;
}

const Card: React.FC<CardProps> = ({cardTitle, cardDescription}) => {
  return (
    <div className="w-full md:w-1/2 hover:scale-95 transition duration-300 ease-in-out">
        <div className="relative h-full">
            <span className="absolute top-0 left-0 
            w-full h-full 
            mt-4 ml-4 opacity-50
            border-2 border-yellow-950
            bg-yellow-500 rounded-lg"></span>
            <span className="absolute top-0 left-0 
            w-full h-full 
            mt-2 ml-2
            border-2 border-yellow-950
            bg-yellow-500 rounded-lg"></span>
            
            
            <div className="relative h-full p-5 bg-white border-2 border-yellow-950 rounded-lg">
                
                <div className="flex items-center">
                    <h3 className="text-lg font-bold text-black">
                        {cardTitle}
                    </h3>
                </div>
                
                <p className="text-gray-700">
                    {cardDescription}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card