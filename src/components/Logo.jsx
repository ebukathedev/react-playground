import React from "react";
import reactLogo from "../assets/images/react.svg";

const Logo = () => {
	return (
		<a href="#" className="flex items-center space-x-2">
			<img
				src={reactLogo}
				alt="React logo"
				className="animate-[spin_6s_linear_infinite]"
			/>
			<span className="font-bold text-lg text-react-blue md:text-xl">
				React Playground
			</span>
		</a>
	);
};

export default Logo;
