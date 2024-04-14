import  { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import { Harmburger, CloseMenuBtn } from "./svg"
import WBT from "../../assets/WBT.png"
import WillBeThere from "../../assets/Will be there.png"

const styles = {

  navBarContainer: `flex h-[10vh] sticky top-0 justify-between w-screen gpx-[100px] items-center px-8 py-12 md:px-24 md:py-10 font-normal text-sm font-montserrat`,
  logo: ` justify-center flex flex-col items-center`,
  navBarLinks: ` text-wybt-primary justify-between gap-5 md:gap-10 sm:flex hidden`,
  navBarLinksMobile: `flex sm:hidden flex-col  z-10 gap-3`,
  navBarBtn: `bg-wybt-primary text-wybt-white /h-[58.9px]  rounded-md py-2 px-11 gap-4 sm:block hidden`,
  navBarBtnMobile: `bg-wybt-primary text-wybt-white /h-[58.9px] rounded-md py-2 px-10 gap-4 text-center flex sm:hidden `,
  // sideline: `bg-[#45062e] h-full w-2 p-[1px] `,
  sidelineLeft: `flex-r md:border-l-[1px] border-wybt-neutral-black md:pl-20 block pl-10 max-h-full py-1`,
  sidelineRight: `fle md:border-r-[1px] border-wybt-neutral-black md:pr-20 block pr-10 py-[.12em]`,
  mobileNav: `flex flex-col top-0 bg-wybt-white p-20 w-3/4 absolute right-0 h-screen sm:hidden gap-5   `,
  navBarOverlay: `bg-wybt-neutral-black h-screen absolute top-0 w-screen left-0 opacity-80 cursor-pointer `
}
const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    console.log('isOpen:', isOpen);
  }, [isOpen]);
  const handleMenuToggle = () => {

    setIsOpen(!isOpen)

  }
  return (
    <>
      <nav className={styles.navBarContainer}>
        <div className="">
          <span className={styles.sidelineRight}><div className={styles.logo}><img src={WBT} alt="WBT Logo" width='64px' /><img src={WillBeThere} alt="WBT TagLine" className='w-20' /></div></span>
        </div>
        <div className={styles.navBarLinks}>
          <NavLink to="">Event Details</NavLink>
          <NavLink to="">Dashboard</NavLink>
          <NavLink to="">Contact Us</NavLink>
        </div>
        <div >
          <NavLink className={styles.sidelineLeft}><button className={styles.navBarBtn}>Register</button></NavLink>
        </div >
        {/* Mobile Menu */}
        <div className='font-extrabold text-3xl block sm:hidden z-20 cursor-pointer'>{isOpen ? (<CloseMenuBtn handleClick={handleMenuToggle} className="size-6" />) : (<Harmburger handleClick={handleMenuToggle} className=" size-6" />)}</div>{isOpen &&
          <div className={styles.navBarOverlay} onClick={() => { setIsOpen(false) }}></div>}
        {isOpen && (<div className={`${styles.mobileNav} transform ${isOpen ? '' : 'translate-y-[-100vh'} transition-transform duration-500 ease-in-out`}  ><div className={styles.navBarLinksMobile}>
          <NavLink to="">Event Details</NavLink>
          <NavLink to="">Dashboard</NavLink>
          <NavLink to="">Contact Us</NavLink>
        </div>
          <div >
            <NavLink className={styles.sidelineLefth}><button className={styles.navBarBtnMobile}>Register</button></NavLink>
          </div ></div>)}
      </nav ></>
  )
}

export default NavBar