import React from 'react';
import {getPagesArray} from "../../utils/pages";
import styles from './Pagination.module.css';

function Pagination({totalPages, page,changePage}) {
    let pagesCount =getPagesArray(totalPages);
    return (
        <div className={styles.pagination}>
            {pagesCount.map(number =>
                <button key={number} className={`${styles.btn} ${page === number?styles.active:''}`} onClick={()=> changePage(number)}>
                    {number}
                </button>
            )}
        </div>
    );
}

export default Pagination;