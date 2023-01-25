import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div>
			<Navbar />
			<main className="p-5 max-w-[600px] my-10 mx-auto">
				<Home/>
			</main>
		</div>
	);
};

export default App;
