import React, { useState } from "react";
import WordRows from "./WordRows";

export const GameBoard = () => {
  return (
    <div className="flex justify-center items-center grow">
      <div className="w-312 h-372 grid gap-1 p-2">
        {[...Array(6)].map(() => (
          <WordRows />
        ))}
      </div>
    </div>
  );
};
