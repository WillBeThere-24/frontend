import { useState } from "react";
import axios from "axios";

const usePost = () => {
  const [loading, setLoading] = useState(false);
  const postData = async (url, body) => {
    setLoading(true);
    try {
      const { data } = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      });
      return data;
    } catch (error) {
      throw new Error(error.response.data.message);
    } finally {
      setLoading(false);  
    }
  };

  return { postData, loading };
};

export default usePost;
