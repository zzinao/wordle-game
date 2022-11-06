import React, { useEffect, useState } from 'react';

export const Timer = () => {
	const [minutes, setMinutes] = useState(10);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const countdown = setInterval(() => {
			if(seconds > 0 ) return setSeconds(seconds - 1);
			if(seconds === 0 && minutes === 0){
				clearInterval(countdown);
			}else{
				setMinutes(minutes - 1);
				setSeconds(59);
			}
		}, 1000);
		return () => clearInterval(countdown);
	}, [minutes, seconds]);

	return (
		<div className="font-medium text-2xl ml-6">
			<p>{minutes}: {seconds < 10 ? `0${seconds}` : seconds }</p>
		</div>
	);
};

