import { useState, useMemo } from "react";

import "./App.css";
// 1.15
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";


function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", text: "ccc JavaScript is a programming language" },
		{ id: 2, title: "React", text: "aaa React is the JavaScript library" },
		{ id: 3, title: "Angular", text: "bbb Angular is the JavaScript framework" },
	]);

	const [filter,setFilter]=useState({sort:'',query:''})

	const [modal,setModal]=useState(false);

	const sortedPosts = useMemo(() => {
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
		setModal(false)
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};


	return (
		<div className='App'>
			<Button onClick={()=>setModal(true)}>Add new post</Button>
			<PostFilter filter={filter} setFilter={setFilter}/>
			<PostList posts={sortedSearchPosts} title='Posts list' remove={removePost} />
			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</Modal>
		</div>
	);
}

export default App;
