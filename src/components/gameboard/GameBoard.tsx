import React from 'react';
import { useStore }from '../../store';
import BoardRow from './BoardRow';
interface IProps {
  guess: string[];
}

export const GameBoard = ({ guess }: IProps) => {
	const state = useStore();
	let rows = [...state.rows];
	rows = guess.concat(Array(6 - guess.length).fill(''));

	return (
		<div className="flex m-5 justify-center items-center grow">
			<div className="w-328 grid gap-1 p-2">
				{rows.map((item, i) => (
					<BoardRow letters={item} key={i} />
				))}
			</div>
		</div>
	);
};
