import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { Harmburger, CloseMenuBtn } from "./svg";
import WBT from "../../assets/WBT.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("isOpen:", isOpen);
  }, [isOpen]);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible"
  }, [isOpen])
  return (
    <>
      <nav className={`flex h-[10vh] sticky top-0 justify-between w-full gpx-[100px] items-center px-8 py-10 md:px-24 md:py-10 font-normal text-sm font-montserrat bg-wybt-white overflow-hidden z-50 shadow-sm`}>
        <div className="">
          <span className={`fle md:border-r-[1px] border-wybt-neutral-black md:pr-20 block pr-10 py-[.12em] max-h-10`}><div ><a href="/" className={` justify-center flex flex-col items-center z- min-w-[6px] relative z-50 `}><img src={WBT} alt="WBT Logo" width='62px' /><p className="font-[Cinzel] font-[800] text-wybt-primary md:text-[10px] text-center text-nowrap text-[9px] mt-[-4px]">WILL BE THERE</p></a></div></span>
        </div>
        <div className={` text-wybt-primary justify-between gap-5 md:gap-10 sm:flex hidden text-nowrap whitespace-nowrap px-3`}>
          <NavLink to="" >Event Details</NavLink>
          <NavLink to="">Dashboard</NavLink>
          <NavLink to="">Contact Us</NavLink>
        </div>
        <div >
          <NavLink to="/register" className={`flex-r md:border-l-[1px] border-wybt-neutral-black md:pl-20 block pl-10  py-1 max-h-10`}><button className={`bg-wybt-primary text-wybt-white /h-[58.9px]  rounded-md py-2 px-11 gap-4 sm:block hidden`}>Register</button></NavLink>
        </div >
        {/* Mobile Menu */}
        <div className='font-extrabold text-3xl block sm:hidden z-50 cursor-pointer'>{isOpen ? (<CloseMenuBtn handleClick={handleMenuToggle} className="size-8" />) : (<Harmburger handleClick={handleMenuToggle} className=" size-8" />)}</div>{isOpen &&
          <div className={`bg-wybt-neutral-black h-screen fixed top-0 w-screen left-0 opacity-80 cursor-pointer 40 block sm:hidden`} onClick={() => { setIsOpen(false) }}></div>}
        {isOpen && (<div className={`flex flex-col top-0 bg-wybt-white p-16 w-full fixed right-0 h-screen sm:hidden gap-5 z-40 justify-center items-center ${isOpen ? 'translate-x-xfull duration-150 transform translate-x-4' : 'translate-x-full transitfion-all duration-500 ease-in-out'} `}  ><div className={`flex sm:hidden flex-col  z-70 gap-3 text-[1rem]`}>
          <NavLink to="">Event Details</NavLink>
          <NavLink to="">Dashboard</NavLink>
          <NavLink to="">Contact Us</NavLink>
        </div>
          <div >
            <NavLink to="/register"><button className={`bg-wybt-primary text-wybt-white /h-[58.9px] rounded-md py-2 px-10 gap-4 text-center flex sm:hidden `}>Register</button></NavLink>
          </div ></div >)
        }
      </nav ></>
  )
}
export default NavBar;
