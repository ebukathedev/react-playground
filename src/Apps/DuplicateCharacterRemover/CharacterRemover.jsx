import React, { useContext, useState, useEffect } from "react";
import { FormContext } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const CharBlock = ({ character }) => {
	return (
		<div className="flex flex-col w-20 gap-1 px-3 py-3 text-white rounded-lg bg-slate-700 h-fit">
			<FaTimes className="self-end text-react-blue" />
			<span className="text-xl font-bold text-center">{character}</span>
		</div>
	);
};

const CharacterRemover = () => {
	const { formState } = useContext(FormContext);
	const [text, setText] = useState([]);
	const navigate = useNavigate();

	const handleCharacters = () => {
		let wordArray = formState.split(" ");
		let characters = wordArray.join("").split("");
		setText([...characters]);
	};

	useEffect(() => {
		if (!formState.length) {
			navigate("/duplicate-character-remover");
		} else {
			handleCharacters();
		}
	}, []);

	return (
		<section className="min-h-full p-10 overflow-y-scroll bg-slate-300">
			<div className="flex flex-wrap justify-start gap-5">
				{text.map((character) => (
					<CharBlock character={character} />
				))}
			</div>
		</section>
	);
};

export default CharacterRemover;
