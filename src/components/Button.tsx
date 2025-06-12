import { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    buttonText: string; 
    buttonColor?: "red" | "yellow"; 
    buttonLink?: string; 
    buttonType?: "button" | "submit" | "reset"; 
    disabled?: boolean;
}


const Button: React.FC<ButtonProps> = ({buttonText, buttonColor, buttonLink, buttonType, disabled}) => {

  const baseClasses =
  "relative group enabled:hover:scale-150 enabled:focus:scale-150 transition duration-200 ease-in-out";
  const spanClasses =
  "absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black";

  const hoverColorClass = buttonColor === "yellow" ? "group-enabled:hover:bg-yellow-400 group-enabled:hover:text-black" : "group-enabled:hover:bg-red-600 group-enabled:hover:text-white";
  const focusColorClass = buttonColor === "yellow" ? "group-enabled:group-focus:bg-yellow-400 group-enabled:group-focus:text-black" : "group-enabled:group-focus:bg-red-600 group-enabled:group-focus:text-white";

  const innerSpanClasses =
  `fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 
  text-base font-bold text-black 
  transition duration-200 ease-in-out 
  ${hoverColorClass}  
  ${focusColorClass}
  group-disabled:bg-gray-300 `;


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
    <button disabled={disabled} className={baseClasses} type={buttonType}>
      <span className={spanClasses}></span>
      <span className={innerSpanClasses}>
          {buttonText}
      </span>
    </button>
  )
}

export default Button