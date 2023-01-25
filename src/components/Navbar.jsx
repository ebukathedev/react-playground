const linkStyles = `p-[6px] ml-4 hover:text-redPink`;

const Navbar = () => {
	return (
		<nav className="flex items-center p-5 mx-auto max-w-[600px] border-b-[1px] border-b-lightGray">
			<h1 className="text-redPink font-bold text-3xl">The Dojo Blog</h1>
			<div className="ml-auto">
				<a href="/" className={linkStyles}>
					Home
				</a>
				<a href="/create" className={linkStyles}>
					New Blog
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
