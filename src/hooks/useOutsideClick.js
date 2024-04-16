import {useEffect, useRef} from "react";

export function useOutsideClick(handler, listenCapturing = true) {
    const ref = useRef();

    // detect click outside of the modal window
    useEffect(function (){
        function handleClick(event) {
            if(ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }
        /* third argument (true) prevents the event from bubbling up. so event
        * will be capture only when bubble down the tree (capturing phase*/
        document.addEventListener("click", handleClick, listenCapturing);

        return () => document.removeEventListener("click", handleClick, listenCapturing);
    }, [handler, listenCapturing]);

    return ref;
}