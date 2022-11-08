import { useStore } from "../../store/store";
import { LetterState } from "../../types/type";

interface KeyboardProps {
  onClick: (key: string) => void;
}
export function Keyboard({ onClick: onClickProps }: KeyboardProps) {
  const keyboardLetterState = useStore((s) => s.keyboardLetterState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { textContent, innerHTML } = e.currentTarget;

    let returnProps = textContent!;
    if (textContent !== innerHTML) {
      returnProps = "Backspace";
    }

    onClickProps(returnProps);
  };
  return (
    <div className={`flex flex-col`}>
      {keyboardKeys.map((keyboardRow, rowIndex) => (
        <div key={rowIndex} className="my-2 flex justify-center space-x-1">
          {keyboardRow.map((key, index) => {
            let styles =
              "rounded font-bold uppercase flex-1 py-2 hover:bg-gray-300";

            const letterState = keyStateStyles[keyboardLetterState[key]];

            if (letterState) {
              styles += " text-white px-1 " + letterState;
            } else if (key !== "") {
              styles += " bg-gray-200";
            }

            if (key === "") {
              styles += " pointer-events-none";
            } else {
              styles += " px-1";
            }

            return (
              <button onClick={onClick} key={key + index} className={styles}>
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

const keyStateStyles = {
  [LetterState.Miss]: "bg-myGray",
  [LetterState.Exist]: "bg-myYellow",
  [LetterState.Correct]: "bg-myGreen",
};

const keyboardKeys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
];
