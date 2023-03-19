import React from "react";

const AppLink = ({ title }) => {
	return (
		<li className="transition-all ease-in-out hover:bg-react-blue hover:bg-opacity-10 hover:text-react-blue">
			<a href="#" className="block px-5 py-2">
				{title}
			</a>
		</li>
	);
};

export default AppLink;
