import React from 'react';
import Timer from './timer';

const Header = () => {
	return(
		<div className="flex w-full justify-center items-center pt-5 py-3">
			<h1 className="text-center text-5xl font-bold">Wordle</h1>
			<Timer/>
		</div>
	);
};

export default Header;