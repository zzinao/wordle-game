import React, { useEffect } from 'react';
import KeyboardBlock from './KeyboardBlock';
import useGuess from '../../hooks/useGuess';
import { keyArr, keyArr2, keyArr3 } from '../../utils/keys';

// interface IProps {
//   onClick: (onClickProps: string) => void;
// }

export const Keyboard = () => {
	// const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	const { textContent, innerHTML } = e.currentTarget;

	// 	let returnProps = textContent!;
	// 	if (textContent !== innerHTML) {
	// 		returnProps = 'Backspace';
	// 	}

	// 	onClickProps(returnProps);
	// };

	const [guess, setGuess, addGuessLetter] = useGuess();

	return (
		<div className="flex flex-col items-center w-full">
			<div className="key_rows">
				{keyArr.map((key) => (
					<KeyboardBlock value={key} key={key} onClick={() => addGuessLetter(key)} />
				))} 
			</div>
			<div className="key_rows">
				{keyArr2.map((key) => (
					<KeyboardBlock value={key} key={key} onClick={() => addGuessLetter(key)} />
				))}
			</div>
			<div className="key_rows">
				<KeyboardBlock value="ENTER" onClick={() => addGuessLetter('ENTER')} />
				{keyArr3.map((key) => (
					<KeyboardBlock value={key} key={key} onClick={() => addGuessLetter(key)} />
				))}
				<KeyboardBlock value="CLEAR" onClick={() => addGuessLetter('CLEAR')} />
			</div>
		</div>
	);
};
