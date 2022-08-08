import { useState } from "react";

import "./App.css";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", text: "JavaScript is a programming language" },
		{ id: 2, title: "React", text: "React is the JavaScript library" },
		{ id: 3, title: "Angular", text: "Angular is the JavaScript framework" },
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};
	return (
		<div className='App'>
			<PostForm create={createPost} />
			<PostList posts={posts} title='Posts list' />
		</div>
	);
}

export default App;
