import React, { useState } from "react";
import GameBoard from "../components/gameboard";
import KeyBoard from "../components/keyboard";

const Game = () => {
  return (
    <>
      <h1 className="text-center text-5xl">Wordle</h1>
      <div className="w-500 my-0 mx-auto flex flex-col ">
        <GameBoard />
        <KeyBoard />
      </div>
    </>
  );
};

export default Game;
