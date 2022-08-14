import {useEffect, useRef} from "react";

export const useObserver = (ref,canLoad,isLoading,callback)=> {
    const observer=useRef();

    useEffect(()=>{
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();
        let scroll = function (entries,observer){
            if(entries[0].isIntersecting && canLoad){
                canLoad()
            }
        }
        observer.current=new IntersectionObserver(scroll);
        observer.current.observe(ref.current);
    },[isLoading])
}