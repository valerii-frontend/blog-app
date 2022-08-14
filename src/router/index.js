import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
    {path:'/', component:<Home/>,exact:true},
    {path:'/about', component:<About/>},
    {path:'/posts', component:<Posts/>},
    {path:'/posts/:id', component:<PostPage/>},
    {path:'/login', component:<Navigate replace to='/posts'/>},
    {path:'*', component:<Error/>},
]
export const publicRoutes = [
    {path:'/', component:<Home/>,exact:true},
    {path:'/about', component:<About/>},
    {path:'/login', component:<Login/>},
    {path:'*', component:<Navigate replace to='/login'/>},
]