import React from "react";
import GameBoardBlock from "../../elements/GameBoardBlock";

const WordRows = () => {
  return (
    <div className="grid grid-cols-5 gap-1">
      {[...Array(5)].map((item) => (
        <GameBoardBlock />
      ))}
    </div>
  );
};

export default WordRows;
