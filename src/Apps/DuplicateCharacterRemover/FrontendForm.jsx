import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../../context/FormContext";

const FrontendForm = () => {
	const [text, setText] = useState("");
	const [isValid, setIsValid] = useState(false);
	const { formState, setFormState } = useContext(FormContext);
	const navigate = useNavigate();

	const handleSubmit = (e, text) => {
		e.preventDefault();
		if (text.trim().length > 0) {
			setIsValid(true);
			setFormState(text);
			navigate("/duplicate-character-remover/character-remover");
		} else {
			alert("Please provide a non-empty value");
		}
		console.log(text);
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
						onChange={(e) => {
							setText(e.target.value);
						}}
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
