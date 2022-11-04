import React from 'react';
import useStore from '../../store';
import BoardRow from './BoardRow';
interface IProps {
  guess: string[];
}

export const GameBoard = ({ guess }: IProps) => {
	const rowArr = guess.concat(Array(6 - guess.length).fill(''));

	return (
		<div className="flex justify-center items-center grow">
			<div className="w-328 h-372 grid gap-1 p-2">
				{rowArr.map((item, i) => (
					<BoardRow letters={item} key={i} />
				))}
			</div>
		</div>
	);
};
