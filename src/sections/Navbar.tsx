import { useState } from "react";
import { menuItems, type MenuItem } from "../static/TextContentFR"; 

export const NavbarItems = () => {
  return (
    <ul className="md:flex gap-4 justify-between text-base font-bold text-black pt-4 md:pt-0">
      {menuItems.map((menuItem:MenuItem) => (
        <li key={menuItem.href} >
          <a className="h-8 block content-center" href={menuItem.href}>{menuItem.title}</a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState<boolean>(false)
  
  const toggleMenu = () => SetIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 
    text-black">
      <div className="px-6 md:px-12 xl:px-16 py-4  bg-white relative">
        <div className="flex flex-wrap items-center bg-white"> 
          <div className="flex-1 flex justify-between items-center">
            <a href="/" className="md:text-xl text-l font-black">BrrBrrPatapim</a>
          </div>

          <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none md:hidden flex' aria-label='Toggle Menu'>
            <img src={isOpen ? "/close.svg" : "/menu.svg"} alt='toggle' className=' invert w-8 h-8'/>
          </button>

          <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
              <NavbarItems />
            </nav>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
          <nav className='p-5'>
            <NavbarItems />
          </nav>
        </div>
        
      </div>

      
      <div className="relative left-0 bottom-0 w-full h-[32px] bg-transparent z-10">
        <svg className="w-full h-full block fill-red-700" viewBox="0 0 100 10" preserveAspectRatio="none">
          <polygon points="0,0 100,0 100,8 0,2" />
        </svg>
      </div>
    </header>
  )
}

export default Navbar