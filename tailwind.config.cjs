/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xsm: "375px",
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
		},
		extend: {
			colors: {
				"react-blue": "#00D8FF",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
