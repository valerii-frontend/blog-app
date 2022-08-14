import {useState, useEffect} from "react";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/Modal/Modal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import LoadBar from "../components/UI/LoadBar/LoadBar";
import {useFetch} from "../hooks/useFetch";
import {getPagesCount} from "../components/utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";


function Posts() {
    //states
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(
        sessionStorage.getItem('quantity')
            ?
        sessionStorage.getItem('quantity')
            :
            10);
    const [page, setPage] = useState(sessionStorage.getItem('page'));

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
        fetchPosts(limit,page);
    }, [page,limit]);

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
        sessionStorage.setItem('page',page);
    }
    let content;
    if(postError) {
        content = <h2> Error! {postError}</h2>;
    } else {
        content = isLoading ?
            <LoadBar />:
            <PostList posts={sortAndSearchPosts} title={`Page #${page}`} remove={removePost} />
    }

    return (
        <>
        <div className='page'>
            <h1>Posts list</h1>
            <PostFilter	filter={filter}	setFilter={setFilter} setModal={setModal} limit={limit} setLimit={setLimit} changePage={changePage}/>

            {content}

        </div>
        <Pagination changePage={changePage} page={page} totalPages={totalPages}/>
        <Modal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} lastPostId={sortAndSearchPosts[sortAndSearchPosts.length -1]}/>
        </Modal>
    </>
    );
}

export default Posts;
