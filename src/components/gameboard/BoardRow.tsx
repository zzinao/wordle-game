import React from 'react';
import { LetterState } from '../../utils/gameUtil';
import GameBoardBlock from './GameBoardBlock';
interface IProps {
  letters: string;
  result?: LetterState[];
}

const BoardRow = ({letters = '', result =[],}:IProps) => {
	const letterArr = letters.split('').concat(Array(5-letters.length).fill(''));
	return (
		<div className="grid grid-cols-5 gap-1">
			{letterArr.map((char, i) => (
				<GameBoardBlock char={char} result={result[i]} key={i}/>
			))}
		</div>
	);
};

export default BoardRow; 