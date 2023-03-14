import BgColorChanger from "./Apps/BgColorChanger";
import TodoApp from "./Apps/TodoApp";
import TypingBox from "./Apps/TypingBox";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<div className="flex">
				<main className="h-screen w-screen overflow-x-hidden">
					{/* <BgColorChanger />
				<TypingBox />
				<TodoApp />
				<BgColorChanger /> */}
				</main>
			</div>
		</>
	);
};

export default App;
