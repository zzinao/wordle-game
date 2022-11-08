import React from "react";
import { useStore } from "../../store/store";
import BoardRow from "./BoardRow";
import { TOTAL_CHANGE } from "../../util/gameUtil";

interface IProps {
  guess: string;
}

export const GameBoard = ({ guess }: IProps) => {
  const state = useStore();
  let rows = state.rows.slice();
  let currentRow = 0;
  if (rows.length < TOTAL_CHANGE) {
    currentRow = rows.push({ guess }) - 1;
  }

  rows = rows.concat(Array(TOTAL_CHANGE - rows.length).fill(""));

  return (
    <div className="grid grid-rows-6 gap-2 my-4">
      {rows.map((word, i) => (
        <BoardRow key={i} word={word.guess} result={word.result} />
      ))}
    </div>
  );
};
