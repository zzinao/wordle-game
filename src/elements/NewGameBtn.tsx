import React from "react";
import { useGuess } from "../hooks/useGuess";
import { useStore } from "../store/store";

const NewGameBtn = () => {
  const state = useStore();
  const [guess, setGuess, error, setError, addGuessLetter] = useGuess();

  return (
    <button
      className=" rounded-lg bg-myGreen p-2 mt-4 text-gray-800"
      onClick={() => {
        state.newGame();
        setGuess("");
      }}
    >
      New Game
    </button>
  );
};

export default NewGameBtn;
