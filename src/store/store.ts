import create from "zustand";
import { persist } from "zustand/middleware";
import { computeGuess, getRandomWord } from "../util/gameUtil";
import { LetterState } from "../types/type";

interface GuessRow {
  guess: string;
  result?: LetterState[];
}

interface StoreState {
  answer: string;
  rows: GuessRow[];
  gameState: "playing" | "won" | "lost";
  keyboardLetterState: { [letter: string]: LetterState };
  addGuess(guess: string): void;
  newGame(initialGuess?: string[]): void;
}

export const useStore = create<StoreState>(
  persist(
    (set, get) => {
      const addGuess = (guess: string) => {
        const result = computeGuess(guess, get().answer);

        const rows = get().rows.concat({
          guess,
          result,
        });

        const didWin = result.every((r) => r === LetterState.Correct);

        const keyboardLetterState = get().keyboardLetterState;
        result.forEach((r, index) => {
          const resultGuessLetter = guess[index];

          const currentLetterState = keyboardLetterState[resultGuessLetter];
          switch (currentLetterState) {
            case LetterState.Correct:
              break;
            case LetterState.Exist:
              if (r === LetterState.Miss) {
                break;
              }
            default:
              keyboardLetterState[resultGuessLetter] = r;
              break;
          }
        });

        set({
          rows,
          keyboardLetterState,
          gameState: didWin ? "won" : rows.length === 6 ? "lost" : "playing",
        });
      };

      return {
        answer: getRandomWord(),
        rows: [],
        gameState: "playing",
        keyboardLetterState: {},
        addGuess,
        newGame(initialRows = []) {
          set({
            gameState: "playing",
            answer: getRandomWord(),
            rows: [],
            keyboardLetterState: {},
          });

          initialRows.forEach(addGuess);
        },
      };
    },
    {
      name: "wordle",
      getStorage: () => localStorage,
    }
  )
);
