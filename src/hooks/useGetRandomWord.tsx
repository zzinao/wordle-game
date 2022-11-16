import React, { useEffect, useState } from "react";
import { BASE_URL } from "../util/gameUtil";

const useGetRandomWord = () => {
  const [data, setData] = useState<any>(null);
  let randomWord;
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [BASE_URL]);

  if (data) {
    randomWord = data.valid[Math.floor(Math.random() * data.valid.length)];
  }

  return randomWord;
};

export default useGetRandomWord;
