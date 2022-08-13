import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
    {path:'/', component:<Home/>,exact:true},
    {path:'/about', component:<About/>,exact:true},
    {path:'/posts', component:<Posts/>,exact:true},
    {path:'/posts/:id', component:<PostPage/>,exact:true},
    {path:'/login', component:<Navigate replace to='/posts'/>,exact:true},
    {path:'*', component:<Error/>,exact:true},
]
export const publicRoutes = [
    {path:'/', component:<Home/>,exact:true},
    {path:'/about', component:<About/>,exact:true},
    {path:'/login', component:<Login/>,exact:true},
    {path:'*', component:<Navigate replace to='/login'/>,exact:true},
]