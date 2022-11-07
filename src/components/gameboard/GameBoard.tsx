import React from 'react';
import { useStore } from '../../store/store';
import BoardRow from './BoardRow';

export const GameBoard = () => {
	const state = useStore();
	let rows = state.rows.slice();
	rows = rows.concat(Array(6 - rows.length).fill(''));

	console.log(rows);
	
	return (
		<div className="flex m-5 justify-center items-center grow">
			<div className="w-328 grid gap-1 p-2">
				{rows.map((item, i) => (
					<BoardRow 
						letters={item.guess}
						result={item.result}
						key={i} />
				))}
			</div>
		</div>
	);
};
