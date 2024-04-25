import { Outlet } from "react-router-dom";
import { DashNavBar, SidebarContainer } from "../components/dashboard";
import { Footer } from "../components/common";

const DashboardSharedLayout = () => {
  return (
    <>
      <DashNavBar />
      <div className='flex gap-12'>
        <SidebarContainer />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default DashboardSharedLayout;
