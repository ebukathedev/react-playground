import React, { useState } from "react";

const BgColorChanger = () => {
	const hexValues = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
	];
	const [bgColor, setBgColor] = useState("#e0e0e0");

	const handleClick = () => {
		let color = "#";
		for (let i = 0; i < 6; i++) {
			const randomNumber = Math.floor(Math.random() * hexValues.length);
			color += hexValues[randomNumber];
		}
		console.log(color);
		setBgColor(color);
	};

	return (
		<section
			className="grid h-full place-items-center"
			style={{ backgroundColor: bgColor }}
		>
			<div className="max-w-[400px] bg-slate-700 flex flex-col space-y-6 p-5 rounded-md">
				<span className="text-lg font-bold text-white md:text-2xl">
					Background Color Changer
				</span>
				<button
					className="self-center px-8 py-1 font-bold border border-black rounded-md bg-slate-300"
					onClick={handleClick}
				>
					Click
				</button>

				<span className="text-xl font-bold tracking-wide text-center uppercase" style={{color: bgColor}}>{ bgColor}</span>
			</div>
		</section>
	);
};

export default BgColorChanger;
