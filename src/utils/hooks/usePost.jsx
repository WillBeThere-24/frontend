import { useState } from "react";
import axios from "axios";

const usePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const postData = async (url, body) => {
    setLoading(true);
    try {
      const { data } = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { postData, data, loading, error };
};

export default usePost;
