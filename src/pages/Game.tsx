import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useGuess } from "../hooks/useGuess";
import { usePrevious } from "../hooks/usePrevious";
import Keyboard from "../components/keyboard";
import { useReset, useStore } from "../store/store";
import { isValidWord } from "../util/gameUtil";
import GameBoard from "../components/gameboard";
import Modal from "../components/modal/Modal";

const Game = () => {
  const state = useStore();
  const [guess, setGuess, addGuessLetter] = useGuess();
  const addGuess = useStore((s) => s.addGuess);
  const previousGuess = usePrevious(guess);
  const isTimeOver = useReset((s) => s.timeover);
  const isGameOver = state.gameState !== "playing";

  useEffect(() => {
    if (guess.length === 0 && previousGuess?.length === 5) {
      if (isValidWord(previousGuess)) {
        addGuess(previousGuess);
      } else {
        setGuess(previousGuess);
      }
    }
  }, [guess]);

  return (
    <div className="mx-auto w-96 relative h-screen">
      <Header />
      <GameBoard guess={guess} />
      <Keyboard
        onClick={(key) => {
          addGuessLetter(key);
        }}
      />
      {/* {isTimeOver && (
        <Modal>
          <h2>시간 초과!</h2>
          <button
            className="border border-green-500 rounded bg-green-500 p-2 mt-4 text-gray-800 shadow"
            onClick={() => {
              state.newGame();
              setGuess("");
            }}
          >
            New Game
          </button>
        </Modal>
      )} */}

      {isGameOver && (
        <Modal>
          {state.gameState == "won" ? <h2>You Win!</h2> : <h2>Game Over</h2>}
          <p>정답은...{state.answer}</p>
          <button
            className="border border-green-500 rounded bg-green-500 p-2 mt-4 text-gray-800 shadow"
            onClick={() => {
              state.newGame();
              setGuess("");
            }}
          >
            New Game
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Game;
