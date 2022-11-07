/** @type {import('tailwindcss').Config} */
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) };
const px0_700 = { ...Array.from(Array(701)).map((_, i) => `${i}px`) };

// eslint-disable-next-line no-undef
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontSize: px0_100,
			width: px0_700,
			height: px0_700,
			colors: {
				// 메인 색깔 값 추가
				myGreen: '#6aaa64',
				myYellow: '#c9b458',
				myGray: '#787c7e',
			},
		},
	},
	plugins: [],
};
