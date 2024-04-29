
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();
  return (
    <div>
      <div className='gap-3 flex'>
        <Link to="/register"
          className={`${
            location.pathname === "/register"
              ? "font-bold text-wybt-primary"
              : "text-wybt-light-gray"
          } text-2xl md:text-3xl block`}
        >
          Sign Up
        </Link>
        <Link to="/login"
          className={`${
            location.pathname === "/login"
              ? "font-bold text-wybt-primary"
              : "text-wybt-light-gray"
          } text-2xl md:text-3xl block`}
        >
          {" "}
          Log In
        </Link>
      </div>
      <Outlet />
      <div>
      </div>
    </div>
  );
};

export default Tabs;
