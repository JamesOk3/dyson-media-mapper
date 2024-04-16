import {useEffect, useState} from "react";

function useFilePreview(file) {
    const [imgSrc, setImgSrc] = useState(null);
    useEffect(() => {
        if (file && file[0]) {
            if (typeof file[0] === "string") {
                setImgSrc(file[0]);
                return;
            }
            const objectUrl = URL.createObjectURL(file[0]);
             objectUrl && setImgSrc(objectUrl);
        }
    }, [file]);
    return [imgSrc, setImgSrc];
}

export default useFilePreview;