import Button from "./Button";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const footerIconsAndTitles = [
  {
    icon: "/icons/footer/call.svg",
    text: "000-000-000",
  },
  {
    icon: "/icons/footer/msg.svg",
    text: "dummy@gmail.com",
  },
  {
    icon: "/icons/footer/location.svg",
    text: "Lagos, Nigeria",
  },
];
const Footer = () => {
  return (
    <footer className='flex flex-col gap-8 md:gap-4 w-full bg-wybt-primary text-wybt-white px-8 py-16 md:px-24 md:py-36 font-normal text-sm font-montserrat overflow-hidden'>
      <div className='flex flex-col md:flex-row gap-8 lg:gap-16 justify-between'>
        <div className='flex flex-col gap-6 flex-1'>
          <Button
            className='text-wybt-primary bg-wybt-white'
            onClick={() => toast("yay")}
          >
            Contact Us
          </Button>
          {footerIconsAndTitles.map((item, id) => {
            return (
              <div className='flex gap-4' key={id}>
                <img src={item.icon} alt={item.icon} />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className='py-8 hidden md:flex'>
          <hr className='bg-wybt-white w-[0.5px] h-full ' />
        </div>
        <div className='flex gap-8 lg:gap-36 flex-1 md:justify-center justify-between'>
          <div className='flex flex-col gap-4 text-wybt-white justify-center'>
            <Link to='/'>Event Details</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Privacy Policy</Link>
          </div>
          <div className='flex flex-col gap-4 text-wybt-white justify-center'>
            <Link to='/'>Will you be there</Link>
            <div className='flex gap-2 self-end'>
              <a href='https://www.instagram.com' target='_blank'>
                <img src='/icons/footer/instagram.svg' alt='instagram' />
              </a>
              <a href='https://www.facebook.com' target='_blank'>
                <img src='/icons/footer/facebook.svg' alt='facebook' />
              </a>
              <a href='https://www.twitter.com' target='_blank'>
                <img src='/icons/footer/twitter.svg' alt='twitter' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center md:self-end text-xs'>
        (c) All rights reserved <strong>Will You Be There</strong>
      </p>
    </footer>
  );
};
export default Footer;
