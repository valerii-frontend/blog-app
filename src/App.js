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

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};
	return (
		<div className='App'>
			<PostForm create={createPost} />
			{posts.length !== 0 ? <PostList posts={posts} title='Posts list' remove={removePost} /> : <h3>Have no posts!</h3>}
		</div>
	);
}

export default App;
