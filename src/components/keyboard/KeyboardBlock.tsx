import React from 'react';

interface IProps {
  value: string;
  onClick: () => void;
}

const KeyboardBlock = ({ value, onClick }: IProps) => {
	const longKeyStyle = value.length === 1 ? 'w-40' : 'w-70';
	
	return (
		<div className={
			longKeyStyle +
        ' bg-gray-200 hover:bg-gray-300 h-54 300 grid text-center items-center rounded font-semibold cursor-pointer'
		} 
		onClick={onClick}>
			{value}
		</div>
	);
};

export default KeyboardBlock;
