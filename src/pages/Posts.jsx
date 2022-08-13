import { useState, useEffect } from "react";

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
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

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
        <>
        <div className='page'>
            <PostFilter	filter={filter}	setFilter={setFilter} setModal={setModal}/>

                {content}

            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} lastPostId={sortAndSearchPosts[sortAndSearchPosts.length -1]}/>
            </Modal>

        </div>
    <Pagination changePage={changePage} page={page} totalPages={totalPages}/>
    </>
    );
}

export default Posts;
