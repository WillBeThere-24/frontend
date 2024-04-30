import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import WBT from "../../assets/WBT.png";
import CloseMenuBtn from "/public/icons/navigation menu/Close-Menu.svg";
import Harmburger from "/public/icons/navigation menu/Harmburger-Menu-Icon.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (e, id, offset) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - offset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`flex h-[10vh] sticky top-0 justify-between w-full gpx-[100px] items-center px-8 py-10 md:px-24 md:py-10 font-normal text-sm font-montserrat bg-wybt-white overflow-hidden z-50 shadow-sm`}
      >
        <div className=''>
          <span
            className={`fle md:border-r-[1px] border-wybt-neutral-black md:pr-20 block pr-10 py-[.12em] max-h-10`}
          >
            <div>
              <a
                href='/'
                className={` justify-center flex flex-col items-center z- min-w-[6px] relative  `}
              >
                <img src={WBT} alt='WBT Logo' width='62px' />
                <p className='font-[Cinzel] font-[800] text-wybt-primary md:text-[10px] text-center text-nowrap text-[9px] mt-[-4px]'>
                  WILL BE THERE
                </p>
              </a>
            </div>
          </span>
        </div>

        <div
          className={`text-wybt-primary justify-between gap-5 md:gap-10 sm:flex hidden text-nowrap whitespace-nowrap px-3`}
        >
          <NavLink to='/#home' onClick={(e) => scrollToSection(e, "home", 0)}>
            Home
          </NavLink>
          <NavLink
            to='/#features'
            onClick={(e) => scrollToSection(e, "features", 150)}
          >
            Features
          </NavLink>
          <NavLink
            to='/#reviews'
            onClick={(e) => scrollToSection(e, "reviews", 150)}
          >
            Reviews
          </NavLink>
        </div>

        <NavLink
          to='/login'
          className={` md:border-l-[1px] border-wybt-neutral-black md:pl-20 block pl-10 py-1 max-h-10`}
        >
          <button
            className={`bg-wybt-primary text-wybt-white /h-[58.9px]  rounded-md py-2 px-11 gap-4 sm:block hidden`}
          >
            Login
          </button>
        </NavLink>

        {/* Mobile Menu */}
        <div className='font-extrabold text-3xl block sm:hidden z-50 cursor-pointer'>
          {isOpen ? (
            <button onClick={handleMenuToggle}>
              <img src={CloseMenuBtn} alt='' width='30px' />
            </button>
          ) : (
            <button onClick={handleMenuToggle}>
              <img src={Harmburger} alt='' />
            </button>
          )}
        </div>

        {isOpen && (
          <>
            <div
              className={`bg-wybt-neutral-black h-screen fixed top-0 w-screen left-0 opacity-80 cursor-pointer 40 block sm:hidden`}
              onClick={() => setIsOpen(false)}
            ></div>
            <div
              className={`text-[1rem] flex flex-col top-0 bg-wybt-white p-16 w-5/6 fixed right-0 h-screen sm:hidden gap-6 z-40 pt-36 itemsg-center ${
                isOpen
                  ? "translate-x-xfull duration-150 transform translate-x-4"
                  : "translate-x-full transitfion-all duration-500 ease-in-out"
              }`}
            >
              <NavLink
                to='/#home'
                onClick={(e) => {
                  scrollToSection(e, "home", 0);
                  setIsOpen(false);
                }}
                className='before:bg-wybt-primary before:w-3 before:h-3 flex items-center before:rounded-full before:mr-3'
              >
                Home
              </NavLink>
              <NavLink
                to='/#features'
                onClick={(e) => {
                  scrollToSection(e, "features", 150);
                  setIsOpen(false);
                }}
                className='before:bg-wybt-primary before:w-3 before:h-3 flex items-center before:rounded-full before:mr-3'
              >
                Features
              </NavLink>
              <NavLink
                to='/#reviews'
                onClick={(e) => {
                  scrollToSection(e, "reviews", 150);
                  setIsOpen(false);
                }}
                className='before:bg-wybt-primary before:w-3 before:h-3 flex items-center before:rounded-full before:mr-3'
              >
                Reviews
              </NavLink>
              <NavLink to='/register'>
                <button
                  className={`bg-wybt-primary text-wybt-white /h-[58.9px] rounded-md py-2 px-10 gap-4 text-center flex sm:hidden text-[1.2rem] `}
                >
                  Register
                </button>
              </NavLink>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
