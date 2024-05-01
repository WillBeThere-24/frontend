import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const images = [
  "/images/hero-img.png",
  "/images/3rd-interaction.png",
  "/images/feature-2.png",
  "/images/signup-2b.png",
];
function Hero() {
  const [index, setIndex] = useState(0);
  const nextSlide = () =>
    setIndex((prev) => {
      if (prev === images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  console.log(index);
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='h-[90vh]' id='home'>
      <div className='flex'>
        <div className='overflow-hidden'>
          <div className='flex '>
            {images.map((image, id) => {
              return (
                <img
                  key={id}
                  className='w-full min-w-full object-cover h-[90vh] brightness-50 transition-transform ease-in duration-500'
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                    width: "100%",
                  }}
                  src={image}
                  alt={image}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className='lg:w-1/2 w-full absolute  lg:left-8 top-1/2 -translate-y-1/2 px-4'>
        <h1 className='lg:text-6xl text-3xl lg:text-left text-center  font-bold text-montserrat text-wybt-neutral-white lg:leading-[4rem] font-montserrat'>
          Create events, <br /> RSVP effortlessly!
        </h1>
        <p className='text-wybt-neutral-white my-6 lg:text-left text-justify text-end-center sub-text'>
          Plan your events easily with our helpful platform. Effortlessly put
          together fun gatherings, from carefully making guest lists to creating
          exciting themes - we make it all happen smoothly.
        </p>
        <div className='flex gap-4 md:gap-8 items-center'>
          <Link
            to='/dashboard/new-event'
            className=' max-w-30 md:max-w-40 w-full'
          >
            <button className='rounded-lg w-full max-w-30 md:max-w-40 py-2 text-wybt-neutral-white font-bold border border-white bg-wybt-primary'>
              Create An Event
            </button>
          </Link>

          <Link to='/register' className=' max-w-30 md:max-w-40 w-full'>
            <button className='rounded-lg w-full py-2 text-wybt-neutral-white font-bold border  bg-wybt-primary'>
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Hero;
