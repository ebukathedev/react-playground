import { useState } from "react";
import BgColorChanger from "./Apps/BgColorChanger";
import TodoApp from "./Apps/TodoApp";
import TypingBox from "./Apps/TypingBox";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen(!isOpen);

	return (
		<>
			<div className="flex flex-col w-screen h-screen">
				<Navbar isOpen={isOpen} onClick={handleClick} />
				<div className="relative flex-1 overflow-hidden lg:flex">
					<SideBar isOpen={isOpen} />
					<main className="w-full h-full overflow-x-hidden">
						<TodoApp />
						<BgColorChanger />
						<TypingBox />
					</main>
				</div>
			</div>
		</>
	);
};

export default App;
