import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import PostService from "../API/PostService";
import LoadBar from "../components/UI/LoadBar/LoadBar";
import Button from "../components/UI/Button/Button";
import styles from './PostPage.module.css'


const PostPage = ({setPage,page}) => {
    const params = useParams();

    const [post,setPost] = useState({});
    const [comments,setComments] = useState([]);

    const [fetchPostById,isLoading,error] = useFetch(async ()=>{
       const response = await PostService.getById(params.id);
       setPost(response.data)
   });
    const [fetchComments,isComLoading,errorCom] = useFetch(async ()=>{
        const response = await PostService.getCommentsById(params.id);
        setComments(response.data)
    });

    useEffect(()=> {
        fetchPostById(params.id);
        fetchComments(params.id);
    },[])

    const navigate = useNavigate();

    return (
        <div className='page'>
           <h1>This is post {params.id} content</h1>
             {isComLoading? <LoadBar/>:
                <div>
                    <div>
                        <h2 className={styles.postName}>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <h3>Post comments</h3>
                    <ul className={styles.comments}>
                        {comments.map(com=>
                            <li key={com.id} className={styles.comment}>
                                <div className={styles.header}>
                                    <strong>
                                        {
                                            com.name.split(' ').map((w,i)=>
                                            i === 0?w[0].toUpperCase()+ w.slice(1,w.length)+ ' ':
                                            i === 1?w[0].toUpperCase()+ w.slice(1,w.length)+ ' ':null
                                            )
                                        }
                                    </strong>
                                    <i>{com.email}</i>
                                </div>
                                <div className={styles.body}>{
                                    com.body[0].toUpperCase()+ com.body.slice(1,com.body.length)

                                }</div>
                            </li>
                       )}
                    </ul>

                </div>
            }
            <br/>
            <div className={styles.footer}>
                <Button onClick={()=> navigate(-1)}>Go back</Button>
            </div>
        </div>
    );
};

export default PostPage;