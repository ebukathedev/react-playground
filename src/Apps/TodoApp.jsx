import React, { useState } from "react";

const Task = ({ text, isDone, taskDone }) => {
	return (
		<li className="list-disc text-white">
			<div className="flex items-center">
				<span
					className={`font-medium flex-1 ${
						isDone ? "opacity-70 line-through" : ""
					}`}
					onClick={() => taskDone(!isDone)}
				>
					{text}
				</span>
				<button
					className="text-2xl text-blue-300"
					onClick={() => console.log("deleted")}
				>
					&times;
				</button>
			</div>
		</li>
	);
};

const TodoApp = () => {
	const [isDone, setIsDone] = useState(false);
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
		let obj = { id: randomNumber, textValue: text, isDone: isDone };
		setText("");
		setTasks((prevValue) => [...prevValue, obj]);
		console.log([...tasks, obj]);
	};

	const taskDone = (isDone) => setIsDone(!isDone);

	return (
		<section className="grid place-items-center h-full bg-slate-300">
			<div className="max-w-[600px] bg-slate-700 flex flex-col space-y-6 p-5 rounded-md">
				<div className="font-bold text-white text-center text-lg md:text-2xl overflow-x-auto">
					Todo App
				</div>
				<form
					className="flex gap-2"
					onSubmit={(e) => handleClick(e, text)}
				>
					<input
						type="text"
						className="font-bold text-slate-700 text-lg bg-slate-300 p-2 rounded-md flex-1"
						placeholder="Start typing"
						onChange={(e) => handleChange(e)}
						value={text}
					/>
					<button className="py-2 px-8 rounded-md self-center border-[2px] border-black bg-blue-300 font-bold text-lg">
						Add
					</button>
				</form>
				<ul className="px-5 flex flex-col space-y-3">
					{tasks.map((obj, index) => (
						<Task
							key={obj.id}
							text={obj.textValue}
							isDone={obj.isDone}
							taskDone={() => taskDone(obj.isDone)}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default TodoApp;
