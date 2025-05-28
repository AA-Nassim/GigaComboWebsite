interface CardProps {
    cardTitle: string;
    cardDescription: string;
}

const Card: React.FC<CardProps> = ({cardTitle, cardDescription}) => {
  return (
    <div className="w-full sm:w-1/2">
        <div className="relative h-full">
            <span className="absolute top-0 left-0 
            w-full h-full 
            mt-1 ml-1 
            bg-red-800 rounded-lg"></span>
            
            <div className="relative h-full p-5 bg-white border-2 border-red-800 rounded-lg">
                
                <div className="flex items-center">
                    <h3 className="text-lg font-bold text-black">
                        {cardTitle}
                    </h3>
                </div>
                
                <p>
                    {cardDescription}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card