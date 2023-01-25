import React from "react";

const BlogList = ({ blogs }) => {
	return (
		<div>
			{blogs.map((blog) => (
				<div className="py-3 px-4 my-5 border-b-[1px] border-b-lightGray hover:shadow-[1px_3px_5px_rgba(0,0,0,0.1)]">
					<h2 className="font-bold text-xl text-redPink mb-2">
						{blog.title}
					</h2>
					<p>Written by {blog.author}</p>
				</div>
			))}
		</div>
	);
};
export default BlogList;
