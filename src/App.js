import { useState } from "react";

import "./App.css";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/Select/Select";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", description: "A JavaScript is a programming language" },
		{ id: 2, title: "React", description: "C React is the JavaScript library" },
		{ id: 3, title: "Angular", description: "B Angular is the JavaScript framework" },
	]);
	const [selectedSort, setSelectedSort] = useState('')


	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const sortPosts=(sort)=>{
		setSelectedSort(sort);
		setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))

	}
	return (
		<div className='App'>
			<PostForm create={createPost} />
			<Select defaultValue='Sort by'
					value={selectedSort}
					onChange={sortPosts}
					options={[
				{value:'title',name:'By name'},
				{value:'description',name:'By description'},
			]}
			/>
			{posts.length !== 0 ?
				<PostList posts={posts} title='Posts list' remove={removePost} /> :
				<h3>Have no posts!</h3>
			}
		</div>
	);
}

export default App;
