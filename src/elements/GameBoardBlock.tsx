import React from 'react';

interface IProps {
  char: string;
  status?: string;
}

const GameBoardBlock = ({char}:IProps) => {
	// return <div className="block bg-slate-500">b</div>;
	return (
		<div
			className="flex w-60 h-60 text-3xl items-center justify-center border border-gray-400 font-bold uppercase"
		>
			{char}
		</div>
	);
};

export default GameBoardBlock;
