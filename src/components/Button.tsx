interface ButtonProps {
    buttonText: string; 
    buttonLink: string; 
}


const Button: React.FC<ButtonProps> = ({buttonText, buttonLink}) => {
  return (
    <a className="relative hover:scale-150 transition duration-200 ease-in-out" href={buttonLink}>
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black "></span>
        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-200 ease-in-out hover:bg-red-700 hover:text-white">
            {buttonText}
        </span>
    </a>
  )
}

export default Button