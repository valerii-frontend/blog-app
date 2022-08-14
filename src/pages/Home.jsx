import React from 'react';
import styles from './Page.module.css'
const Home = () => {
    return (
        <div className='page'>
            <h1>HomePage</h1>
            <h2>This is practice project using dummy API</h2>
            <br/>
            <p>
                <strong>{`{JSON} Placeholder - `}</strong>
                <a className={styles.link} href="https://jsonplaceholder.typicode.com/"
                   target='_blank' rel='noopener'>jsonplaceholder</a>
            </p>
            <br/>
            <h3>Implementation</h3>
            <ul className={styles.list}>
                <li>Use <strong>axios</strong> for creating dummy API service</li>
                <li>Create <strong>custom hook for fetching</strong> posts and comments data</li>
                <li>Add <strong>pagination</strong> to split posts show quantity</li>
                <li>Use <strong>React Transition Group</strong> for posts animation</li>
                <li>Create custom <strong>loader</strong></li>
                <li>Add dummy <strong>authorization</strong></li>
                <li>Use <strong>Routes</strong>, split for public and private</li>
                <li>Use <strong>session storage</strong> for save authorization flag and post page information</li>
                <li>Add global context with <strong>useContext</strong> hook</li>
                <li>Create hook for <strong>searching and sorting</strong> posts</li>
                <li>Use <strong>CSS Modules Stylesheet</strong> with media query for responsive view</li>
                <li>Creating a Form to Add a New Post</li>
                <li>Creating a library of reusable <strong>UI</strong> components</li>
            </ul>
        </div>
    );
};

export default Home;