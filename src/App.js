import { useState, useMemo } from "react";

import "./App.css";
// 1.15
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";


function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", description: "ccc JavaScript is a programming language" },
		{ id: 2, title: "React", description: "aaa React is the JavaScript library" },
		{ id: 3, title: "Angular", description: "bbb Angular is the JavaScript framework" },
	]);

	const [filter,setFilter]=useState({sort:'',query:''})

	const sortedPosts = useMemo(() => {
		console.log("func");
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
		}
		return posts;
	}, [filter.sort, posts]);


	const sortedSearchPosts = useMemo(() => {
		return sortedPosts.filter((p) => p.title.toLowerCase().includes(filter.query.toLowerCase()));
	}, [filter.query, sortedPosts]);


	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};


	return (
		<div className='App'>
			<PostForm create={createPost} />
			<PostFilter filter={filter} setFilter={setFilter}/>
			{sortedSearchPosts.length !== 0 ? (
				<PostList posts={sortedSearchPosts} title='Posts list' remove={removePost} />
			) : (
				<h3>Have no posts!</h3>
			)}
		</div>
	);
}

export default App;
