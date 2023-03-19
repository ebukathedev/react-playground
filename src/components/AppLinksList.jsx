import React from "react";
import AppLink from "./AppLink";

const AppLinksList = () => {
	return (
		<ul className="flex flex-col space-y-2 overflow-y-scroll text-white">
			<AppLink title="Background Color Changer" />
			<AppLink title="Typing Box" />
			<AppLink title="Todo App" />
			<AppLink title="Tic-Tac-Toe" />
			<AppLink title="Digital Clock" />
			<AppLink title="Counter App" />
			<AppLink title="Letter Counter" />
			<AppLink title="Word Counter" />
			<AppLink title="Image Slider" />
			<AppLink title="Scientific Calculator" />
			<AppLink title="Rock Paper Scissor" />
			<AppLink title="Countdown Timer" />
			<AppLink title="Random Quote Generator" />
			<AppLink title="Number Guessing" />
			<AppLink title="URL Shortener" />
		</ul>
	);
};

export default AppLinksList;
