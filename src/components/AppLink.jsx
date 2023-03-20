import React from "react";
import { Link } from "react-router-dom";

const AppLink = ({ title, path }) => {
	return (
		<li className="transition-all ease-in-out hover:bg-react-blue hover:bg-opacity-10 hover:text-react-blue">
			<Link to={path} className="block px-5 py-2">
				{title}
			</Link>
		</li>
	);
};

export default AppLink;
