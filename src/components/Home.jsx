import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [name, setName] = useState("mario");
	const [blogs, setBlogs] = useState([
		{
			title: "My new Website",
			body: "lorem ipsum dolor...",
			author: "Mario",
			id: 1,
		},
		{
			title: "Welcome Party!",
			body: "lorem ipsum dolor...",
			author: "Yoshi",
			id: 2,
		},
		{
			title: "Web Dev Top Tips",
			body: "lorem ipsum dolor...",
			author: "Mario",
			id: 3,
		},
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	useEffect(() => {
		console.log("use effect ran");
		console.log(name);
	}, [ name ]);
	
	return (
		<div>
			<BlogList
				blogs={blogs}
				title="All Blogs"
				handleDelete={handleDelete}
			/>
			<button
				className="bg-slate-300 px-2 py-1 text-black"
				onClick={() => setName("luigi")}
			>
				Change name
			</button>
		</div>
	);
};

export default Home;
