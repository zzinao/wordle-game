import React,{useEffect, useState} from 'react';

export default function useGuess(): [
    string, 
    React.Dispatch<React.SetStateAction<string>>,
    (letter: string) => any
    ] {
	const [guess, setGuess] = useState('');
	// const [error, setError] = useState('');
	console.log(guess);
	const addGuessLetter = (letter: string) => {
		setGuess((curLetter) => {
			const newGuess = 
            letter.length === 1 && curLetter.length !== 5 ? curLetter + letter : curLetter;

			switch (letter) {
			case 'CLEAR':
				return newGuess.slice(0, -1);
			case 'ENTER':
				if(newGuess.length === 5){
					return '';
				}
			}
			if (newGuess.length === 5) {
				return newGuess;
			}
			return newGuess;
		});
	};

	const onKeyDown = (e: KeyboardEvent) => {
		if (e.code === 'Enter') {
			addGuessLetter('ENTER');
		} else if (e.code === 'Backspace') {
			addGuessLetter('CLEAR');
		} else if ('abcdefghijklmnopqrstuvwxyz'.includes(e.key.toLowerCase())) {
			addGuessLetter(e.key.toUpperCase());
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, []);

	return [guess, setGuess, addGuessLetter];
}