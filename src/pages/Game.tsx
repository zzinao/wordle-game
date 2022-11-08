import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { useGuess } from "../hooks/useGuess";
import { usePrevious } from "../hooks/usePrevious";
import Keyboard from "../components/keyboard";
import { useStore } from "../store/store";
import { isValidWord } from "../util/gameUtil";
import GameBoard from "../components/gameboard";
import Modal from "../elements/Modal";
import GameEndModal from "../components/modal/GameEndModal";
import NewGameBtn from "../elements/newGameBtn";
import { WORD_LENGTH } from "../util/gameUtil";

const Game = () => {
  const state = useStore();
  const [guess, setGuess, error, setError, addGuessLetter, isOpen, setIsOpen] =
    useGuess();
  const addGuess = useStore((s) => s.addGuess);
  const previousGuess = usePrevious(guess);
  const isGameOver = state.gameState !== "playing";

  useEffect(() => {
    if (guess.length === 0 && previousGuess?.length === WORD_LENGTH) {
      if (isValidWord(previousGuess)) {
        addGuess(previousGuess);
      } else {
        setGuess(previousGuess);
        setIsOpen(true);
        setError("존재하지 않는 단어입니다!");
      }
    }
  }, [guess]);

  useEffect(() => {
    if (isOpen) {
      const modalOpen = setTimeout(() => {
        setIsOpen(false);
      }, 2000);
      return () => clearTimeout(modalOpen);
    }
  }, [isOpen]);

  return (
    <div className="mx-auto w-96 relative h-screen">
      {error && isOpen ? <Modal>{error}</Modal> : null}
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
          <NewGameBtn />
        </Modal>
      )} */}

      {isGameOver && <GameEndModal />}
    </div>
  );
};

export default Game;

//
