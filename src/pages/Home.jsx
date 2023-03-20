import React from "react";

const Home = () => {
	return (
		<section className="grid h-full place-items-center px-4 text-white">
			<div className="max-w-[600px] bg-slate-800 flex flex-col space-y-6 p-5 rounded-md">
				<div>
					<h1 className="text-2xl font-extrabold md:text-3xl">
						Welcome to my {" "}
						<span className="text-react-blue">
							React Playground
						</span>
					</h1>
				</div>

				<p>
					A site where I showcase mini React apps I build to practice
					and learn React concepts.
				</p>
			</div>
		</section>
	);
};

export default Home;
