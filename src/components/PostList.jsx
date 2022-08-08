import React, { useState } from "react";
import PostItem from "./PostItem";

export default function PostList() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", body: "JavaScript is a programming language" },
		{ id: 2, title: "JavaScript", body: "JavaScript is a programming language" },
		{ id: 3, title: "JavaScript", body: "JavaScript is a programming language" },
	]);
	return (
		<>
			<h1>Posts list</h1>
			{posts.map((post) => (
				<PostItem post={post} key={post.id} />
			))}
		</>
	);
}
