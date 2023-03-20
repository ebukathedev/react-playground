import React, { useState } from "react";

const Task = ({ id, text, isDone, onDelete }) => {
	const [isTaskDone, setIsTaskDone] = useState(isDone);

	return (
		<li className="text-white list-disc">
			<div
				className={`flex items-center space-x-4 ${
					isTaskDone && "opacity-70"
				}`}
			>
				<span
					className={`font-medium flex-1 ${
						isTaskDone && "line-through"
					}`}
					onClick={() => setIsTaskDone(!isTaskDone)}
				>
					{text}
				</span>
				<button
					className="text-2xl text-blue-300"
					onClick={() => onDelete(id)}
				>
					&times;
				</button>
			</div>
		</li>
	);
};

const TodoApp = () => {
	const [text, setText] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleChange = (e) => {
		let displayText = "";
		const value = e.target.value;
		displayText += value;
		setText(displayText);
	};

	const handleClick = (e, text) => {
		e.preventDefault();
		let randomNumber = Math.floor(Math.random() * 100 + 1);
		let obj = { id: randomNumber, textValue: text, isDone: false };
		setText("");
		text && setTasks((prevValue) => [...prevValue, obj]);
	};

	const handleDelete = (id) => {
		let newTasks = tasks.filter((obj) => obj.id != id);
		setTasks(newTasks);
	};

	return (
		<section className="grid h-full px-4 place-items-center bg-slate-300">
			<div className="max-w-[600px] bg-slate-700 flex flex-col space-y-6 p-5 rounded-md">
				<div className="overflow-x-auto text-lg font-bold text-center text-white md:text-2xl">
					Todo App
				</div>
				<form
					className="flex flex-wrap gap-2 md:flex-nowrap max-sm:justify-center"
					onSubmit={(e) => handleClick(e, text)}
				>
					<input
						type="text"
						className="flex-1 p-2 text-lg font-bold rounded-md text-slate-700 bg-slate-300"
						placeholder="Start typing"
						onChange={(e) => handleChange(e)}
						value={text}
					/>
					<button className="py-2 px-8 rounded-md self-center border-[2px] border-black bg-blue-300 font-bold text-lg">
						Add
					</button>
				</form>
				<ul className="flex flex-col px-5 space-y-3">
					{tasks.map((obj, index) => (
						<Task
							key={obj.id}
							id={obj.id}
							text={obj.textValue}
							isDone={obj.isDone}
							onDelete={handleDelete}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default TodoApp;
