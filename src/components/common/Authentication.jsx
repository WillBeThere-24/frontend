import { toast } from "react-hot-toast";
import useStore from "../../utils/store/useStore";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Authentication = ({ children }) => {
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      toast.error("Please login to access this page");
    }
  }, [user]);

  if (!user) {
    return <Navigate to='/register' />;
  }

  return <>{children}</>;
};
export default Authentication;
