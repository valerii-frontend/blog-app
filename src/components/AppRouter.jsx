import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;