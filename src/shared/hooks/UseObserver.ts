import { useEffect, useRef } from "react";

export const useObserver = (ref: React.RefObject<HTMLElement>, canLoad: boolean, isLoading: boolean, callback: any) => {
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        let cb = (entries: IntersectionObserverEntry[], observer: any) => {
            if(entries[0].isIntersecting && canLoad){
               callback();
            }
        };

        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current as Element);
    }, [isLoading]);
}