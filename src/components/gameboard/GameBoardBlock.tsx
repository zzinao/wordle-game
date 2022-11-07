import React from 'react';
import { LetterState } from '../../utils/gameUtil';

interface IProps {
  char: string;
  result?: LetterState;
}

const GameBoardBlock = ({char, result}:IProps) => {
	const gameStateStyle = {
		[LetterState.Miss]: 'bg-MyGray border-MyGray',
		[LetterState.Exist]: 'bg-MyYellow border-MyYellow',
		[LetterState.Correct]: 'bg-MyGreen border-MyGreen'
	};
	
	const stateStyle = 
	!result ? 'bg-slate-200 text-extrabold' : `${gameStateStyle[result]} text-white`; 
	
	return (
		<div
			className={`flex w-60 h-60 text-3xl items-center rounded-sm p-0 m-0 justify-center uppercase ${stateStyle}`}
		>
			{char}
		</div>
	);
};

export default GameBoardBlock;
