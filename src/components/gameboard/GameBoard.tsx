import React from "react";
import { useStore } from "../../store/store";
import BoardRow from "./BoardRow";

interface IProps {
  guess: string;
}

export const GameBoard = ({ guess }: IProps) => {
  const state = useStore();
  let rows = state.rows.slice();
  let currentRow = 0;
  if (rows.length < 6) {
    currentRow = rows.push({ guess }) - 1;
  }

  rows = rows.concat(Array(6 - rows.length).fill(""));

  return (
    <div className="grid grid-rows-6 gap-2 my-4">
      {rows.map((word, i) => (
        <BoardRow key={i} word={word.guess} result={word.result} />
      ))}
    </div>
  );
};
