import React from 'react';
import {getPagesArray} from "../../utils/pages";
import styles from './Pagination.module.css';

function Pagination({totalPages,changePage}) {
    let pagesCount =getPagesArray(totalPages);
    const page = +sessionStorage.getItem('page');
    return (
        <div className={styles.pagination}>
            {pagesCount.map(number =>
                <button key={number}
                        className={`${styles.btn} 
                        ${page === number
                            ?
                            styles.active
                            : number === 1 && !page
                            ?
                            styles.active
                            :''
                        }`}
                        onClick={()=> changePage(number)}>
                    {number}
                </button>
            )}
        </div>
    );
}

export default Pagination;