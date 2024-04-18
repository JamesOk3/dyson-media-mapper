import {useEffect, useRef} from "react";

/**
 * Detects clicks outside of a specified element and triggers a handler function.
 *
 * @param {Function} handler - The function to be called when a click outside of the element is detected.
 * @param {boolean} [listenCapturing=true] - Flag indicating whether to listen during the capturing or bubbling phase of the event.
 * @return {object} ref - A reference to the element that is being monitored for outside clicks.
 *
 * @author James M Kambanga
 * Date: April 8, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

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