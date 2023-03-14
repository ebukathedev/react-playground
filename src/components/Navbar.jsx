import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Logo from "./logo";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => setIsOpen(!isOpen);

	return (
		<header className="py-5 px-4 bg-slate-800 md:px-8 md:py-7 lg:hidden">
			<div className="container mx-auto flex items-center justify-between">
				<Logo />
				<HamburgerButton isOpen={isOpen} onClick={handleClick} />
			</div>
		</header>
	);
};

export default Navbar;
