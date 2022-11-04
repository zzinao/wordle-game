import React, {useEffect} from 'react';
import KeyboardBlock from '../../elements/KeyboardBlock';
import { keyArr, keyArr2, keyArr3 } from '../../utils/keys';
import { useAnswerStore } from '../../store/store';

interface IProps {
  handleLetter: (value: string) => void
  handleEnter: () => void
  handleDelete: () => void
}

export const Keyboard = ({ 
	handleLetter,
	handleEnter,
	handleDelete }: IProps) => {
	const { word, answer, pressedAlphabet, submitAnswer } = useAnswerStore();



	return (
		<div className="my-10 mx-8">
			<div className="key_rows">
				{keyArr.map((key) => (
					<KeyboardBlock value={key} key={key} onClick={() => handleLetter(key)} />
				))}
			</div>
			<div className="key_rows">
				{keyArr2.map((key) => (
					<KeyboardBlock value={key} key={key} onClick={() => handleLetter(key)} />
				))}
			</div>
			<div className="key_rows">
				<KeyboardBlock value="ENTER" onClick={handleEnter} />
				{keyArr3.map((key) => (
					<KeyboardBlock value={key} key={key} onClick={() => handleLetter(key)} />
				))}
				<KeyboardBlock value="CLEAR" onClick={handleDelete} />
			</div>
		</div>
	);
};
