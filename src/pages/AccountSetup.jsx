import { Tabs } from "../components";
import aPen from "../assets/A-pen-beside-a-note.png";

const AccountSetup = () => {
  return (
    <div className='flex bg-wybt-white justify-center items-center'>
      <div className='px-8 py-12 block md:flex gap-8 md:gap-16 font-montserrat'>
        <Tabs />
        <div className='md:flex items-center justify-center w-[350px] hidden z-0 m-auto '>
          <img
            src={aPen}
            alt='A pen beside a notebook'
            className='w-[350px] self-center'
          />
        </div>
      </div>
    </div>
  );
};


export default AccountSetup;
