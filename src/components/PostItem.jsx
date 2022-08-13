import React from "react";
import styles from "./PostItem.module.css";
import Button from "./UI/Button/Button";
import {useNavigate} from 'react-router-dom';

export default function PostItem({ post, number, remove }) {
	const navigate = useNavigate();
	function goTo() {
		navigate(`/posts/${post.id}`);
	}
	return (
		<div className={styles.post}>
			<div className={styles.content}>
				<h3>
					{number}. {post.title}
				</h3>
				<p>{post.body}</p>
				<div className={styles.buttons}>
					<Button onClick={() => remove(post)}>Delete</Button>
					<Button onClick={goTo}>See more</Button>
				</div>
			</div>
		</div>
	);
}
