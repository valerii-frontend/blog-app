import React, {useMemo} from 'react';

export const useSortedPosts = (posts,sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
};

 export const usePosts = (posts,sort,query)=> {
     const sortedPosts = useSortedPosts(posts,sort);

     const sortedSearchPosts = useMemo(() => {
         return sortedPosts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
     }, [query, sortedPosts]);

    return sortedSearchPosts;
 }