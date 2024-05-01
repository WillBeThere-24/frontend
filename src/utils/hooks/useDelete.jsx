import { useState } from "react";
import axios from "axios";

const useDelete = () => {
  const [loading, setLoading] = useState(false);
  const deleteData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.delete(url, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, loading };
};

export default useDelete;
