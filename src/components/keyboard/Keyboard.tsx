import React, {useEffect} from 'react';
import KeyboardBlock from './KeyboardBlock';
import { keyArr, keyArr2, keyArr3 } from '../../utils/keys';

interface IProps {
  handleLetter: (value: string) => void
  handleEnter: () => void
  handleDelete: () => void
}

export const Keyboard = ({ 
	handleLetter,
	handleEnter,
	handleDelete }: IProps) => {

	return (
		<div className="flex flex-col items-center w-full">
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
