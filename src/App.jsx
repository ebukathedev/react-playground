import { useState } from "react";
import BgColorChanger from "./Apps/BgColorChanger";
import TodoApp from "./Apps/TodoApp";
import TypingBox from "./Apps/TypingBox";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Whoops404 from "./pages/Whoops404";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen(!isOpen);

	return (
		<div className="flex flex-col w-screen h-screen font-montserrat">
			<Navbar isOpen={isOpen} onClick={handleClick} />
			<div className="relative flex-1 overflow-hidden lg:flex">
				<SideBar isOpen={isOpen} />
				<main className="w-full h-full overflow-x-hidden">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/bg-color-changer"
							element={<BgColorChanger />}
						/>
						<Route path="/todo-app" element={<TodoApp />} />
						<Route path="/typing-box" element={<TypingBox />} />
						<Route path="/typing-box" element={<TypingBox />} />
						<Route path="*" element={<Whoops404 />} />
					</Routes>
				</main>
			</div>
		</div>
	);
};

export default App;
