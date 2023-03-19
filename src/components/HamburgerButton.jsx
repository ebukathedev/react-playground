import React from "react";

const HamburgerButton = ({ isOpen, onClick }) => {
	return (
		<div
			className="flex flex-col space-y-1 lg:hidden"
			onClick={onClick}
			onBlur={onClick}
		>
			<span
				className={`w-4 h-1 bg-react-blue rounded duration-200 ${
					isOpen && "rotate-45 translate-x-[2px] translate-y-[2px]"
				}`}
			></span>
			<span
				className={`w-8 h-1 bg-white rounded duration-200 ${
					isOpen && "-rotate-45"
				}`}
			></span>
			<span
				className={`w-4 h-1 bg-react-blue rounded self-end duration-200 ${
					isOpen && "rotate-45 -translate-x-[2px] -translate-y-[2px]"
				}`}
			></span>
		</div>
	);
};

export default HamburgerButton;
