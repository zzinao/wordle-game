import React from "react";
import Timer from "../timer";

export const Header = () => {
  return (
    <div className="flex justify-between items-end border-b border-gray-400 py-4">
      <h1 className="text-center text-5xl font-bold">Wordle</h1>
      <Timer />
    </div>
  );
};
