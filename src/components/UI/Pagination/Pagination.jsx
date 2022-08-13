import React from 'react';

function Pagination({pagesCount, page,changePage}) {
    return (
        <div className='pagination'>
            {pagesCount.map(number =>
                <button key={number} className={page === number?'active':''} onClick={()=> changePage(number)}>
                    {number}
                </button>
            )}
        </div>
    );
}

export default Pagination;