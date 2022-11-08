import React from "react";
import NewGameBtn from "../../elements/newGameBtn";
import { useGuess } from "../../hooks/useGuess";
import { useStore } from "../../store/store";
import BoardRow from "../gameboard/BoardRow";
import Modal from "../../elements/Modal";

const GameEndModal = () => {
  const state = useStore();
  const [guess, setGuess, error, setError, addGuessLetter] = useGuess();

  const onClipCopy = async (answer: string) => {
    try {
      await navigator.clipboard.writeText(answer);
      alert("복사 완료!");
    } catch (error) {
      alert("에러");
    }
  };

  return (
    <Modal>
      {state.gameState == "won" ? (
        <h2 className="text-2xl font-semibold">You Win!</h2>
      ) : (
        <h2 className="text-2xl font-semibold">Game Over!</h2>
      )}
      <p className="text-xs mt-3 mb-5">정답은...</p>
      <BoardRow word={state.answer} />
      <NewGameBtn />
      <p className="text-xs cursor-pointer mt-4 text-gray-500">정답 공유하기</p>
    </Modal>
  );
};

export default GameEndModal;
