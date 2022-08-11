import { useState, useMemo } from "react";

import "./App.css";
// 1.15
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import {usePosts} from "./hooks/usePosts";
import {queries} from "@testing-library/react";


function App() {
	//start data
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", text: "ccc JavaScript is a programming language" },
		{ id: 2, title: "React", text: "aaa React is the JavaScript library" },
		{ id: 3, title: "Angular", text: "bbb Angular is the JavaScript framework" },
	]);
	//states
	const [filter,setFilter]=useState({sort:'',query:''})
	const [modal,setModal]=useState(false);
	const sortAndSearchPosts = usePosts(posts,filter.sort,filter.query);

	//add remove posts
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
			<PostList posts={sortAndSearchPosts} title='Posts list' remove={removePost} />
			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</Modal>
		</div>
	);
}

export default App;
