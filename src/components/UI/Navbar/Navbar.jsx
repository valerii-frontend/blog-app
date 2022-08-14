import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css'
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth,setIsAuth}= useContext(AuthContext);
    const logoutHandler = (e)=> {
        e.preventDefault();
        sessionStorage.removeItem('auth');
        setIsAuth(false);

   }
    return (
        <nav className={styles.nav}>
           <ul>
              <li> <Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/posts">Posts</Link></li>
               {isAuth && <li><a href='/logout' onClick={logoutHandler}>Logout</a></li>}
           </ul>
        </nav>
    );
};

export default Navbar;