/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 메인 색깔 값 추가
        myGreen: "#6aaa64",
        myYellow: "#c9b458",
        myGray: "#787c7e",
      },
    },
  },
  plugins: [],
};
