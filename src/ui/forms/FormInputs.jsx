import Icons from "../Icons.jsx";

/*
* Functional components for reusable form inputs and styles
*
* @author James M Kambanga
* Date: April 1, 2024,
* Copyright (C) 2024 Newcastle University, UK
* */


export function SelectWithIcon({icon1, icon2, children}) {
    return (
        <div className="relative z-20 bg-gray dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                {icon1}
            </span>
            {children}
            <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                {icon2}
            </span>
        </div>
    )
}

/**
 * Generates a photo file input component with the ability to upload and preview images.
 *
 * @param {Object} children - The child components to be rendered within the photo file input component.
 * @return {JSX.Element} The rendered photo file input component.
 */

export function PhotoFileInput({children, image}) {
    return (
        <>
            <div id="fileUpload"
                 className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5">

                {children}

                <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <Icons id="file-upload" width="16" height="16" viewBox="0 0 16 16" className="fill-primary"/>
                    </span>

                    <p>
                        <span className="text-primary">Click to upload</span> or drag and drop
                    </p>
                    {image ? <img src={image} alt="product image" className="max-h-50 w-auto"/> : (
                        <span className="text-center">
                            <p className="mt-1.5">PNG or JPG</p>
                            <p>(max, 800 X 800px)</p>
                        </span>
                    )}
                </div>
            </div>
        </>
    );
}

export const styles = "w-full rounded border border-stroke bg-gray py-3 px-12 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
export const errorStyles = "!border-rose-300 focus:border-rose-300";
export const selectStyles = `${styles} relative z-20  appearance-none bg-transparent outline-none transition  active:border-primary dark:border-form-strokedark dark:bg-form-input }`
