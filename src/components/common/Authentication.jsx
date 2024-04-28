import toast from "react-hot-toast";
import useStore from "../../utils/store/useStore";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../liner-loader/loader";
import showToast from "../../utils/showToast";
import { useFetch } from "../../utils/hooks";

const Authentication = () => {
  const user = useStore((state) => state.user);
  const setCurrentUser = useStore((state) => state.setUser);
  const { fetchData, loading } = useFetch();

  const fetchCurrentUser = async () => {
    try {
      const { data } = await fetchData(`${import.meta.env.VITE_BASE_URL}/user`);
      setCurrentUser(data);
      showToast.success("User gotten");
      if (!user && !loading) {
        toast.error("Page access denied \n Please login to access this page", {
          className: "text-wybt-primary text-sm",
        });
      }
    } catch (error) {
      showToast.error(error.message);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!user && !loading) {
    return <Navigate to='/register' />;
  }

  return <Outlet />;
};
export default Authentication;
