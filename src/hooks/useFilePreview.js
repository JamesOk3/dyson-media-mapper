import {useEffect, useState} from "react";

/**
 * Generates a file preview image source based on the provided file.
 *
 * @param {File} file - The file to generate the preview image from.
 * @return {Array} An array containing the image source and a function to set the image source.
 *
 * @author James M Kambanga
 * Date: April 8, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

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