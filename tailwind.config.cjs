/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xsm: "375px",
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				gray: "#333",
				redPink: "#f1356d",
				lightGray: "#f2f2f2"
			},
		},
	},
	plugins: [],
};
