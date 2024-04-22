import toast from "react-hot-toast";
import useStore from "../../utils/store/useStore";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Authentication = () => {
  const user = useStore((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    if (!user && !loading) {
      toast.error("User is not logged in \n Please login to access this page");
    }

    return () => clearTimeout(setTimeout(() => setLoading(false), 2000));
  }, [user, loading]);

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center text-2xl font-bold text-wybt-light-gray'>
        Checking if user is logged in...
      </div>
    );
  }

  if (!user) {
    return <Navigate to='/register' />;
  }

  return <Outlet />;
};
export default Authentication;
