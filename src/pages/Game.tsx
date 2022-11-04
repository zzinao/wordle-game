import React, { useState, useEffect } from 'react';
import GameBoard from '../components/gameboard';
import KeyBoard from '../components/keyboard';
import Header from '../components/Hedaer';
import { getWordApi } from '../utils/api';

const Game = () => {
	const [currentGuess, setCurrentGuess] = useState('');
	const [guessArr, setGuessArr] = useState<string[]>([]);

	// useEffect(() => {
	//   getWordApi();
	// }, []);

	console.log(currentGuess);
	console.log(guessArr);
	const handleLetter = (key: string) => {
		console.log(key);
		if (currentGuess.length < 5) {
			setCurrentGuess(currentGuess + key);
			setGuessArr([currentGuess]);
		} else{
			return;
		}
	};
	const handleEnter = () => {
		if (currentGuess.length == 5) {
			setGuessArr((prev) => [...prev, currentGuess]);
			setCurrentGuess('');
		} else {
			alert('5글자를 채워주세요!');
		}
	};

	const handleDelete = () => {
		setCurrentGuess(currentGuess.slice(0, -1));
		setGuessArr([currentGuess]);
	};

	const onClickDown = (e: KeyboardEvent) => {
		console.log(e.key);
		if (e.code === 'Enter') {
			handleEnter();
		} else if (e.code === 'Backspace') {
			handleDelete();
		} else if ('abcdefghijklmnopqrstuvwxyz'.includes(e.key.toLowerCase())) {
			handleLetter(e.key);
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', onClickDown);

		return () => window.removeEventListener('keydown', onClickDown);
	});

	return (
		<div>
			<Header />
			<div className="w-500 my-0 mx-auto flex flex-col ">
				<GameBoard guess={guessArr}/>
				<KeyBoard 
					handleLetter={handleLetter}
					handleEnter={handleEnter}
					handleDelete={handleDelete}/>
			</div>
		</div>
	);
};

export default Game;
