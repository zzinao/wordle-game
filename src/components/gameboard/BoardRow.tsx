import { LetterState } from "../../types/type";
import BoardBlock from "./BoardBlock";

interface WordRowProps {
  word: string;
  result?: LetterState[];
}
export default function WordRow({ word = "", result = [] }: WordRowProps) {
  const letters = word.split("").concat(Array(5 - word.length).fill(""));

  return (
    <div className="grid grid-cols-5 gap-4">
      {letters.map((char, index) => (
        <BoardBlock key={index} value={char} state={result[index]} />
      ))}
    </div>
  );
}
