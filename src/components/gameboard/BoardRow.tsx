import React from 'react';
import GameBoardBlock from './GameBoardBlock';
interface IProps {
  letters: string;
}

const BoardRow = ({letters}:IProps) => {
	const letterArr = letters.split('').concat(Array(5-letters.length).fill(''));
	return (
		<div className="grid grid-cols-5 gap-1">
			{letterArr.map((char, i) => (
				<GameBoardBlock char={char} key={i}/>
			))}
		</div>
	);
};

export default BoardRow;
