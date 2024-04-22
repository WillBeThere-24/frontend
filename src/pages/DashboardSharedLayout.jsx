import { Outlet } from "react-router-dom";
import { DashNavBar } from "../components/dashboard";

const DashboardSharedLayout = () => {
  return (
    <>
      <DashNavBar />
      <Outlet />
    </>
  );
};
export default DashboardSharedLayout;
