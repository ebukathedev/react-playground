import React from "react";

const BlogList = ({ blogs, title, handleDelete }) => {
	return (
		<div>
			<h2 className="font-bold text-2xl mb-4">{title}</h2>
			{blogs.map((blog) => (
				<div
					className="py-3 px-4 my-5 border-b-[1px] border-b-lightGray hover:shadow-[1px_3px_5px_rgba(0,0,0,0.1)]"
					key={blog.id}
				>
					<h2 className="font-bold text-xl text-redPink mb-2">
						{blog.title}
					</h2>
					<p>Written by {blog.author}</p>
					<button
						onClick={() => handleDelete(blog.id)}
						className="bg-redPink px-2 py-1 mt-4 text-white rounded-md"
					>
						Delete Blog
					</button>
				</div>
			))}
		</div>
	);
};
export default BlogList;
