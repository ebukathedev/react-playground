import React from "react";
import reactLogo from "../assets/images/react.svg";

const Logo = ({ styles }) => {
	return (
		<a href="#" className={`items-center space-x-2 ${styles}`}>
			<img
				src={reactLogo}
				alt="React logo"
				className="animate-[spin_6s_linear_infinite]"
			/>
			<span className="font-bold text-lg text-react-blue md:text-xl lg:text-lg">
				React Playground
			</span>
		</a>
	);
};

export default Logo;
