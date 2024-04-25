import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        throw new Error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading };
};

export default useFetch;
