import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosPost = (url, getEmail, getPass) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.post(url, {
        email: getEmail,
        pass: getPass,
      });
      setData(res.data);
      console.log("Data created success");
    } catch (error) {
      console.log("Errors creating Data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return data;
};

export default useAxiosPost;
