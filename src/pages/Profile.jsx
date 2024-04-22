import { DashNavBar, SidebarContainer } from "../components/dashboard";
import { Footer } from "../components/common";

const Profile = () => {
  return (
    <main>
      <DashNavBar />
      <div className='flex gap-12'>
        <SidebarContainer />
        <div className='w-full md:pr-24 gap-5'>
          <div>
            <h1 className='font-bold text-2xl'>Hi, Tamya Jess</h1>
            <p>
              Welcome to <span>Will Be There</span>, You have:
            </p>
          </div>

          <div className='flex gap-12 justify-center mt-8 text-center text-wybt-primary flex-col sm:flex-row w-full items-centher'>
            <div className='text-2xl font-bold border border-wybt-primary py-12  md:px-20 px-12  rounded-md w-1/2 md:w-full'>
              <h3 className=''>10</h3>
              <p className=''>RSVP</p>
            </div>
            <div className='w-1/2 md:w-full text-2xl font-bold border-wybt-primary border py-12 px-20 rounded-md'>
              <h3 className=''>2</h3>
              <p>Events</p>
            </div>
          </div>
          <button className='bg-wybt-primary text-white py-2 px-20 my-20 '>
            Start Creating
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Profile;
