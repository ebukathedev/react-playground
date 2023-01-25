import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
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
			author: "Luigi",
			id: 3,
		},
	]);

	const handleClick = () => {
		console.log("ebuka is awesome");
	};

	return (
		<div>
			<BlogList blogs={blogs} />
		</div>
	);
};

export default Home;
