interface ButtonProps {
    buttonText: string; 
    buttonColor?: "red" | "yellow"; 
    buttonLink?: string; 
    buttonType?: "button" | "submit" | "reset"; 
}


const Button: React.FC<ButtonProps> = ({buttonText, buttonColor, buttonLink, buttonType}) => {

  const baseClasses =
  "relative group hover:scale-150 focus:scale-150 transition duration-200 ease-in-out";
  const spanClasses =
  "absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black";

  const hoverColorClass = buttonColor === "yellow" ? "hover:bg-yellow-400 hover:text-black" : "hover:bg-red-600 hover:text-white";
  const focusColorClass = buttonColor === "yellow" ? "group-focus:bg-yellow-400 group-focus:text-black" : "group-focus:bg-red-600 group-focus:text-white";

  const innerSpanClasses =
  `fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 
  text-base font-bold text-black 
  transition duration-200 ease-in-out 
  ${hoverColorClass}  
  ${focusColorClass}`;

  console.log(innerSpanClasses);

  if (buttonLink) {
    return (
      <a className={baseClasses} href={buttonLink}>
          <span className={spanClasses}></span>
          <span className={innerSpanClasses}>
              {buttonText}
          </span>
      </a>
    )
  }
  
  return (
    <button className={baseClasses} type={buttonType}>
      <span className={spanClasses}></span>
      <span className={innerSpanClasses}>
          {buttonText}
      </span>
    </button>
  )
}

export default Button