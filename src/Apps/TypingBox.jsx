import React, { useState } from "react";

const TypingBox = () => {
	const [text, setText] = useState("Typing Box");
	let displayText = "";

	const handleChange = (e) => {
		const value = e.target.value;
		displayText += value;
		setText(displayText);
	};

	return (
		<section className="grid place-items-center h-full bg-slate-500">
			<div className="max-w-[600px] bg-slate-700 flex flex-col space-y-6 p-5 rounded-md">
				<div className="font-bold text-white text-center text-lg md:text-2xl overflow-x-auto">
					{text}
				</div>
				<input
					type="text"
					className="font-bold text-slate-700 text-lg bg-slate-300 p-2 rounded-md"
					placeholder="Start typing"
					onChange={(e) => handleChange(e)}
					value={text}
				/>
			</div>
		</section>
	);
};

export default TypingBox;
