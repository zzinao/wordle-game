import React, { useState, useEffect } from "react";
import { BASE_URL } from "../util/gameUtil";

const useValid = (word: string) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [BASE_URL]);
  if (data) return data.valid.concat(data.invalid).includes(word);
  return false;
};

export default useValid;
