import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";

const Navbar = ({ isOpen, onClick }) => {
	return (
		<header className="px-4 py-5 bg-slate-800 lg:hidden">
			<div className="container flex items-center justify-between mx-auto">
				<Logo styles="flex" />
				<HamburgerButton isOpen={isOpen} onClick={onClick} />
			</div>
		</header>
	);
};

export default Navbar;
