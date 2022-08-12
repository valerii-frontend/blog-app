import React, { useState } from "react";
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

export default function PostForm({ create }) {
	const [post, setPost] = useState({ title: "", body: "" });
	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post,
			id: Date.now(),
		};
		create(newPost);
		setPost({ title: "", body: "" });
	};

	return (
		<>
			<h1>Add new post</h1>
			<form>
				<Input
					type='text'
					placeholder='post name'
					value={post.title}
					onChange={(e) => setPost({ ...post, title: e.target.value })}
				/>
				<Input
					type='text'
					placeholder='post text'
					value={post.body}
					onChange={(e) => setPost({ ...post, body: e.target.value })}
				/>
				<Button onClick={addNewPost}>Add</Button>
			</form>
		</>
	);
}
