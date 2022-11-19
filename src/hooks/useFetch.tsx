import React, { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json)
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);
  return data;
};

export default useFetch;
