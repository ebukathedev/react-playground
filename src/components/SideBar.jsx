import React from "react";
import Logo from "./Logo";
import AppLinksList from "./AppLinksList";

const sideBarStyles =
	"absolute flex flex-col space-y-5 lg:py-5 lg:space-y-10 bg-slate-800 w-3/5 max-w-[260px] lg:max-w-[280px] top-0 bottom-0 lg:static";

const SideBar = ({ isOpen }) => {
	return (
		<aside
			className={`${sideBarStyles} duration-700 ${
				isOpen ? "right-0" : "-right-full"
			}`}
		>
			<Logo styles="hidden lg:flex px-5" />
			<AppLinksList />
			<footer className="hidden mt-auto bg-red-300 ">
				<span>Gi</span>
				<span>Gi</span>
				<span>Gi</span>
			</footer>
		</aside>
	);
};

export default SideBar;
