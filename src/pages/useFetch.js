import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) return; 

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result.meals); 
      })
      .catch((err) => console.log(err));

  }, [url]);

  return data;
};

export default useFetch;
