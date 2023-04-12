import React from "react";
import AppLink from "./AppLink";

const AppLinksList = () => {
	return (
		<ul className="flex flex-col space-y-2 text-white">
			<AppLink title="Background Color Changer" path="bg-color-changer" />
			<AppLink title="Typing Box" path="typing-box" />
			<AppLink title="Todo App" path="todo-app" />
			<AppLink
				title="Duplicate Character Remover"
				path="duplicate-character-remover"
			/>
			<AppLink title="Meme Generator" path="meme-generator" />
			{/* 
			<AppLink title="Counter App" />
			<AppLink title="Letter Counter" />
			<AppLink title="Word Counter" />
			<AppLink title="Tic-Tac-Toe" path="/" />
			<AppLink title="Image Slider" />
			<AppLink title="Scientific Calculator" />
			<AppLink title="Rock Paper Scissor" />
			<AppLink title="Countdown Timer" />
			<AppLink title="Random Quote Generator" />
			<AppLink title="Number Guessing" />
			<AppLink title="URL Shortener" /> */}
		</ul>
	);
};

export default AppLinksList;
