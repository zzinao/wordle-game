import React, { useState, useEffect } from "react";
import { WORD_LENGTH } from "../util/gameUtil";

export function useGuess(): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (letter: string) => void,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [guess, setGuess] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const addGuessLetter = (letter: string) => {
    setGuess((curGuess) => {
      const newGuess =
        letter.length === 1 && curGuess.length !== WORD_LENGTH
          ? curGuess + letter
          : curGuess;

      switch (letter) {
        case "Backspace":
          return newGuess.slice(0, -1);
        case "Enter":
          if (newGuess.length === WORD_LENGTH) {
            return "";
          } else {
            setError("5글자를 채워주세요!");
            setIsOpen(true);
          }
      }

      if (newGuess.length === WORD_LENGTH) {
        return newGuess;
      }

      return newGuess;
    });
  };

  const onKeyDown = (e: KeyboardEvent) => {
    addGuessLetter(e.key);
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return [guess, setGuess, error, setError, addGuessLetter, isOpen, setIsOpen];
}
