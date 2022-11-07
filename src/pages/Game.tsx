/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState, useEffect, useRef } from 'react';
import GameBoard from '../components/gameboard';
import Keyboard from '../components/keyboard';
import Header from '../components/Hedaer';
import useGuess  from '../hooks/useGuess';
import usePrevious from '../hooks/usePrevious';
import { useStore } from '../store/store';
import { isValidWord } from '../utils/gameUtil';

const Game = () => {
	const [guess, setGuess, addGuessLetter] = useGuess();
	const [showInvalidGuess, setInvalidGuess] = useState(false);
	const [prevState, setPrevState] = useState();

	// useEffect(() => {
	//   let id: NodeJS.Timeout;
	//   if (showInvalidGuess) {
	// 		id = setTimeout(() => setInvalidGuess(false), 1500);
	//   }
	//   return () => clearTimeout(id);
	// }, [showInvalidGuess]);
  
	const addGuess = useStore((state) => state.addGuess);
	const previousGuess = usePrevious(guess);

	console.log(previousGuess);

	useEffect(() => {
	  if (guess.length === 0 && previousGuess?.length === 5) {
			if (isValidWord(previousGuess)) {
		  setInvalidGuess(false);
		  addGuess(previousGuess);
			} else {
		  setInvalidGuess(true);
		  setGuess(previousGuess);
			}
	  }
	}, [guess]);

	useEffect(() => {
		if(guess.length === 0 && previousGuess?.length === 5) { // 다음열로 이동
			if(isValidWord(previousGuess)){
				addGuess
			}
		}
	})

	return (
		<div>
			<Header />
			<GameBoard />
			<Keyboard />
		</div>
	);
};

export default Game;