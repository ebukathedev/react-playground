import React, { useState } from "react";
import { FaCopy, FaCheckCircle } from "react-icons/fa";

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
	const [isCopied, setIsCopied] = useState(false);

	const handleClick = () => {
		let color = "#";
		for (let i = 0; i < 6; i++) {
			const randomNumber = Math.floor(Math.random() * hexValues.length);
			color += hexValues[randomNumber];
		}
		console.log(color);
		setBgColor(color);
		setIsCopied(false);
	};

	const handleCopy = () => {
		console.log("Copied: " + bgColor);
		navigator.clipboard.writeText(bgColor);
		setIsCopied(true);
	};

	return (
		<section
			className="grid h-full place-items-center"
			style={{ backgroundColor: bgColor }}
		>
			<div className="relative max-w-[400px] bg-slate-700 flex flex-col gap-y-6 p-5 rounded-md">
				<span className="text-lg font-bold text-white md:text-2xl">
					Background Color Changer
				</span>

				<button
					className="self-center px-8 py-1 font-bold border border-black rounded-md bg-slate-300"
					onClick={handleClick}
				>
					Click
				</button>

				<div className="flex items-center justify-center space-x-4">
					<span
						className="text-xl font-bold tracking-wide text-center uppercase"
						style={{ color: bgColor }}
					>
						{bgColor}
					</span>
					<button
						className="flex items-center px-3 py-2 space-x-2 text-sm text-white bg-opacity-50 rounded-md bg-slate-800"
						onClick={handleCopy}
					>
						<span>Copy</span>
						<FaCopy />
					</button>
				</div>

				<div
					className={`absolute flex items-center px-4 py-2 space-x-2 text-sm text-white duration-500 -translate-x-1/2 rounded-md  left-1/2 bg-slate-900 bg-opacity-95 ${
						isCopied ? "scale-1 -top-16" : "scale-0 top-0 opacity-0"
					}`}
				>
					<span>Copied</span>
					<FaCheckCircle />
				</div>
			</div>
		</section>
	);
};

export default BgColorChanger;
