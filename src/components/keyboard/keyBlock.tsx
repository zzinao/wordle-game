import React from "react";
import { useStore } from "../../store/store";
import { LetterState } from "../../types/type";
interface IProps {
  value: string;
  onClick: () => void;
}

const KeyboardBlock = ({ value, onClick }: IProps) => {
  const keyboardLetterState = useStore((state) => state.keyboardLetterState);
  const longKeyStyle = value.length === 1 ? "w-40" : "w-70";

  const keyStateStyle = {
    [LetterState.Miss]: "bg-MyGray",
    [LetterState.Exist]: "bg-MyYellow",
    [LetterState.Correct]: "bg-MyGreen",
  };
  let baseStyle = "";
  const keyStyles = keyStateStyle[keyboardLetterState[value]];
  let styles = !keyStyles ? "bg-gray-200" : (baseStyle += keyStyles);

  return (
    <div
      className={
        longKeyStyle +
        styles +
        " hover:bg-gray-300 h-54 300 grid text-center items-center rounded font-semibold cursor-pointer"
      }
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default KeyboardBlock;
