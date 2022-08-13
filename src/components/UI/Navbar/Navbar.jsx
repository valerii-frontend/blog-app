import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
           <ul>
              <li> <Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/posts">Posts</Link></li>
           </ul>
        </nav>
    );
};

export default Navbar;