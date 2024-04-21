import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../components/common";

const HomeSharedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeSharedLayout;
