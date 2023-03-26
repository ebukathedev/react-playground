import React, { useState } from "react";
import { Link } from "react-router-dom";

const FrontendForm = () => {
	const [text, setText] = useState("");
	const [isValid, setIsValid] = useState(false);

	const handleChange = (e) => {
		let inputValue = "";
		const value = e.target.value;
		inputValue += value;
		setText(inputValue);
	};

	const handleSubmit = (e, text) => {
		e.preventDefault();
		const inputValue = text.trim();
		if (!inputValue || inputValue.length === 0) {
			alert("Please provide a non-empty value");
		} else {
			setIsValid(true);
		}
		console.log(inputValue);
		setText("");
	};

	return (
		<section className="grid h-full px-4 place-items-center bg-slate-300">
			<div className="max-w-[600px] bg-slate-700 flex flex-col space-y-6 p-5 rounded-md">
				<div className="overflow-x-auto text-lg font-bold text-center text-white md:text-2xl">
					Duplicate Character Remover
				</div>
				<form
					className="flex flex-wrap gap-2 md:flex-col md:gap-5 max-sm:justify-center"
					onSubmit={(e) => handleSubmit(e, text)}
				>
					<input
						type="text"
						className="flex-1 p-2 text-lg font-bold rounded-md text-slate-700 bg-slate-300"
						placeholder="Write something"
						onChange={(e) => handleChange(e)}
						value={text}
					/>
					<button className="py-2 px-8 rounded-md self-center border-[2px] border-black bg-blue-300 font-bold text-lg">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default FrontendForm;
