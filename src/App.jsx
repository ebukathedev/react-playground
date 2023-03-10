import BgColorChanger from "./Apps/BgColorChanger";
import TodoApp from "./Apps/TodoApp";
import TypingBox from "./Apps/TypingBox";

const App = () => {
	return (
		<main className="h-screen w-screen overflow-x-hidden">
			<BgColorChanger />
			<TypingBox />
			<TodoApp />
			<BgColorChanger />
		</main>
	);
};

export default App;
