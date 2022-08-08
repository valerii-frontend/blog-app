import { useState } from "react";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";

import "./App.css";

import PostList from "./components/PostList";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", body: "JavaScript is a programming language" },
		{ id: 2, title: "JavaScript", body: "JavaScript is a programming language" },
		{ id: 3, title: "JavaScript", body: "JavaScript is a programming language" },
	]);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			title,
			description,
			id: Date.now(),
		};
		setPosts([...posts, newPost]);
		setTitle("");
		setDescription("");
	};

	return (
		<div className='App'>
			<form>
				<Input type='text' placeholder='post name' value={title} onChange={(e) => setTitle(e.target.value)} />
				<Input
					type='text'
					placeholder='post description'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button onClick={addNewPost}>Add</Button>
			</form>
			<PostList posts={posts} title='Posts list' />
		</div>
	);
}

export default App;
