import React from "react";
import { LetterState } from "../../types/type";

interface CharacterBoxProps {
  value?: string;
  state?: LetterState;
}

const BoardBlock = ({ value, state }: CharacterBoxProps) => {
  const stateStyle = !state
    ? "bg-slate-200 text-extrabold"
    : `${gameStateStyle[state]} text-white`;
  return (
    <div
      className={`border-2 p-2 uppercase text-center font-extrabold text-4xl before:inline-block before:content-['_'] ${stateStyle}`}
    >
      {value}
    </div>
  );
};

export default BoardBlock;

const gameStateStyle = {
  [LetterState.Miss]: "bg-myGray",
  [LetterState.Exist]: "bg-myYellow",
  [LetterState.Correct]: "bg-myGreen",
};
