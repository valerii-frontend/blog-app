import React from 'react';
import styles from './Page.module.css'
const About = () => {
    return (
        <div className='page'>
            <h1>About me</h1>
            <h2>My links</h2>
            <ul className={styles.list}>
                <li><a href="mailto:v.lozghachov@gmail.com" target='_blank'>Email</a></li>
                <li><a href="https://github.com/valerii-frontend" target='_blank'>GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/valerii-lozghachov">LinkedIn</a></li>
                <li><a href="https://www.upwork.com/freelancers/~014ead3e287a0b68a3" target='_blank'>Upwork</a></li>
                <li><a href="https://app.codesignal.com/profile/_valerii__" target='_blank'>CodeSignal</a></li>
                <li><a href="https://t.me/the_earth_citizen" target='_blank'>Telegram</a></li>
            </ul>
            <h3>This project code</h3>
            <p>
                <a href="https://github.com/valerii-frontend/react-practice"
                   target='_blank'
                  className={styles.link}>
                    Git repository link
                </a>
            </p>
            <br/>
            <p>Link for clone - <strong><i>https://github.com/valerii-frontend/react-practice.git</i></strong></p>
            <br/>
            <p>Then use terminal for install dependencies with <strong>npm i </strong></p>
            <br/>
            <p>And finally use <strong>npm run start</strong> for start local server with this project</p>
            <p className={styles.help}>❔
                <span>
                    login: <strong>root</strong>
                        <br/>
                    password: <strong>root</strong>
                </span>
            </p>
        </div>
    );
};

export default About;