
import {useEffect, useRef} from "react";

export function useEsc(handler, open, listenCapturing = true) {
    const ref = useRef();

    // detect click outside of the modal window
    useEffect(function (){
        function keyHandler(keyCode) {
            if (!open || keyCode !== 27) return;
            handler();
        }
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    }, [handler, open, listenCapturing]);

    return ref;
}
