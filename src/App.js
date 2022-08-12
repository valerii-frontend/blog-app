import { useState, useEffect } from "react";

import "./App.css";
//---------------
// 1.40
//---------------
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal/Modal";
import Button from "./components/UI/Button/Button";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import LoadBar from "./components/UI/LoadBar/LoadBar";
import Spinner from "./components/UI/Spinner/Spinner";

function App() {
	//states
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: "", query: "" });
	const [modal, setModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	//filter
	const sortAndSearchPosts = usePosts(posts, filter.sort, filter.query);

	useEffect(() => {
		fetchPosts();
	}, []);

	//add remove posts
	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};
	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	//fetch JSON
	async function fetchPosts() {
		setIsLoading(true);
		const posts = await PostService.getAll();
		setTimeout(() => {
			setPosts(posts);
			setIsLoading(false);
		}, 1000);
	}

	return (
		<div className='App'>
			<Button onClick={() => setModal(true)}>Add new post</Button>

			<PostFilter filter={filter} setFilter={setFilter} />
			{isLoading ? <LoadBar /> : <PostList posts={sortAndSearchPosts} title='Posts list' remove={removePost} />}

			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</Modal>
		</div>
	);
}

export default App;
