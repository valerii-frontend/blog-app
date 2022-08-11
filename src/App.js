import { useState, useMemo } from "react";

import "./App.css";
// 1.15
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/Select/Select";
import Input from "./components/UI/Input/Input";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", description: "ccc JavaScript is a programming language" },
		{ id: 2, title: "React", description: "aaa React is the JavaScript library" },
		{ id: 3, title: "Angular", description: "bbb Angular is the JavaScript framework" },
	]);
	const [selectedSort, setSelectedSort] = useState("");
	const [search, setSearch] = useState("");

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const sortPosts = (sort) => {
		setSelectedSort(sort);
	};

	const sortedPosts = useMemo(() => {
		console.log("func");
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
		}
		return posts;
	}, [selectedSort, posts]);

	const sortedSearchPosts = useMemo(() => {
		return sortedPosts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
	}, [search, sortedPosts]);

	return (
		<div className='App'>
			<PostForm create={createPost} />
			<Input placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
			<Select
				defaultValue='Sort by'
				value={selectedSort}
				onChange={sortPosts}
				options={[
					{ value: "title", name: "By name" },
					{ value: "description", name: "By description" },
				]}
			/>
			{sortedSearchPosts.length !== 0 ? (
				<PostList posts={sortedSearchPosts} title='Posts list' remove={removePost} />
			) : (
				<h3>Have no posts!</h3>
			)}
		</div>
	);
}

export default App;
