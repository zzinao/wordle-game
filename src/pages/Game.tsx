import React from "react";
import GameBoard from "../components/GameBoard";
import KeyBoard from "../components/KeyBoard";

const Game = () => {
  return (
    <>
      <h1>Wordle</h1>
      <GameBoard />
      <KeyBoard />
    </>
  );
};

export default Game;
