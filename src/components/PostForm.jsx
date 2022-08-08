import React, { useState } from "react";
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

import styles from "./PostForm.module.css";

export default function PostForm({ create }) {
	const [post, setPost] = useState({ title: "", text: "" });
	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post,
			id: Date.now(),
		};
		create(newPost);
		setPost({ title: "", text: "" });
	};

	return (
		<>
			<h1>Add new post</h1>
			<form className={styles.form}>
				<Input
					type='text'
					placeholder='post name'
					value={post.title}
					onChange={(e) => setPost({ ...post, title: e.target.value })}
				/>
				<Input
					type='text'
					placeholder='post text'
					value={post.text}
					onChange={(e) => setPost({ ...post, text: e.target.value })}
				/>
				<Button onClick={addNewPost}>Add</Button>
			</form>
		</>
	);
}
