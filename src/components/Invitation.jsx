import { Link } from "react-router-dom";

function Invitation() {
  return (
    <div className='h-[25rem] px-8 my-16 relative flex items-center justify-center'>
      <img
        className='absolute top-0 -z-10 left-0 w-full h-full object-cover brightness-50 '
        src='/images/invite-card.png'
        alt=''
      />
      <div className='flex  mx-auto lg:absolute lg:right-8 lg:top-1/2  gap-8 items-center'>
        <Link to='/dashboard/new-event' className='w-full'>
          <button className='rounded-md text-sm w-[8rem] lg:w-56 py-2 text-wybt-neutral-white font-bold border border-white bg-wybt-primary'>
            Create An Event
          </button>
        </Link>
        <Link to='/dashboard/rsvp' className='w-full'>
          <button className='rounded-md text-sm w-[8rem] lg:w-56 py-2 text-wybt-neutral-white font-bold border border-white bg-wybt-primary'>
            RSVP
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Invitation;
