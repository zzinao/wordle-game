import React from 'react';

interface IProps {
  value: string;
  onClick: () => void;
}

const KeyboardBlock = ({ value, onClick }: IProps) => {
	// return <div className="rounded-m m-px flex h-10 w-10 items-center justify-center uppercase bg-green">{str}</div>;
	return (
		<div className="key" onClick={onClick}>
			{value}
		</div>
	);
};

export default KeyboardBlock;
