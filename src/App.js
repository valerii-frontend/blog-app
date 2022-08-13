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
import LoadBar from "./components/UI/LoadBar/LoadBar";
import {useFetch} from "./hooks/useFetch";
import {getPagesArray, getPagesCount} from "./components/utils/pages";
import Pagination from "./components/UI/Pagination/Pagination";


function App() {
	//states
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: "", query: "" });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	//paginations
	let pagesCount =getPagesArray(totalPages);


	//filter
	const sortAndSearchPosts = usePosts(posts, filter.sort, filter.query);
	// fetch data
	const [fetchPosts,isLoading,postError] = useFetch(async ()=>{
		const response = await PostService.getAll(limit,page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPagesCount(totalCount,limit));

	})

	useEffect(() => {
		fetchPosts();
	}, [page]);

	//add remove posts
	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};
	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const changePage = (page)=> {
		setPage(page);
	}

	// catch error
	let content;
		if (postError) {
			content = postError && <h2> Error! {postError}</h2>;
		} else {
			content = isLoading?<LoadBar />:<PostList posts={sortAndSearchPosts} title='Posts list' remove={removePost} />;
		}

	return (
		<div className='App'>
			<Button onClick={() => setModal(true)}>Add new post</Button>

			<PostFilter	filter={filter}	setFilter={setFilter}/>

			{content}

			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} lastPostId={sortAndSearchPosts[sortAndSearchPosts.length -1]}/>
			</Modal>
			<Pagination changePage={changePage} page={page} pagesCount={pagesCount}/>
		</div>
	);
}

export default App;
