import React from "react";
import styles from "./PostItem.module.css";
import Button from "./UI/Button/Button";

export default function PostItem({ post, number, remove }) {
	return (
		<div className={styles.post}>
			<div className={styles.content}>
				<h3>
					{number}. {post.title}
				</h3>
				<p>{post.description}</p>
				<Button onClick={() => remove(post)}>Delete</Button>
			</div>
		</div>
	);
}