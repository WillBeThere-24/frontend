import { toast } from "react-toastify";
import useStore from "../../utils/store/useStore";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Authentication = ({ children }) => {
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      toast.error("Please login to continue");
    }
  }, [user]);

  if (!user) {
    return <Navigate to='/' />;
  }

  return <>{children}</>;
};
export default Authentication;
