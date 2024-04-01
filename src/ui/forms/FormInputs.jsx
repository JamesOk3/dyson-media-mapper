import Icons from "../Icons.jsx";
import {useState} from "react";

/*
* Functional components for reusable form inputs
*
* @author James M Kambanga
* Date: April 1, 2024,
* Copyright (C) 2024 Newcastle University, UK
* */

const styles = "w-full rounded border border-stroke bg-gray py-3 px-12 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"

/**
 * Renders an input field with a placeholder.
 *
 * @param {type} type - the type of input field
 * @param {type} placeholder - the placeholder text for the input field
 * @return {JSX.Element} the input field component
 */
export function Input({type, placeholder}) {
    return (
        <input type={type}
               className={styles}
               placeholder={placeholder}
        />
    );
}

/**
 * Renders a TextArea component with a placeholder, rows, and name.
 *
 * @param {string} placeholder - The text to display when the textarea is empty
 * @param {number} rows - The number of visible text lines for the textarea
 * @param {string} name - The name attribute for the textarea
 * @return {JSX.Element} The rendered TextArea component
 */

export function TextArea({placeholder, rows, name}) {
    return (
        <div className="relative">
            <span className="absolute left-4.5 top-4">
              <Icons id="pen" width="20" height="20" viewBox="0 0 20 20" />
            </span>

            <textarea className={styles}
                name={name}
                id={name}
                rows={rows}
                placeholder={placeholder}>
           </textarea>
        </div>
    )
}

/**
 * Generate a select input field with icons and options.
 *
 * @param {array} options - the list of options to be displayed in the select field
 * @param {element} icon1 - the first icon element to be displayed
 * @param {element} icon2 - the second icon element to be displayed
 * @param {string} placeholder - the placeholder text for the select field
 * @return {JSX.Element} the select input field JSX element
 */
export function Select({options, icon1, icon2, placeholder}) {

    const [selectedOption, setSelectedOption] = useState('');
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };

    return (
        <div className="relative z-20 bg-gray dark:bg-form-input">
            <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                {icon1}
            </span>

            <select value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value);
                        changeTextColor();
                    }}
                    className={`${styles} relative z-20  appearance-none bg-transparent outline-none transition  active:border-primary dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? 'text-black dark:text-white' : ''
                    }`}>
                <option value="" disabled className="text-body dark:text-bodydark">{placeholder}</option>
                {options?.map((option, index) => (
                    <option key={index} value={option} className="text-body dark:text-bodydark">{option}</option>
                ))}
            </select>
            <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                {icon2}
            </span>
        </div>
    )
}

/**
 * Generates a photo file input component with the ability to upload images and display them.
 *
 * @param {Object} children - The child components to be rendered within the photo file input component.
 * @return {JSX.Element} The rendered photo file input component.
 */

export function PhotoFileInput({children}) {
    return (
        <>

            <div id="fileUpload"
                 className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5">

                <input type="file"
                       accept="image/*"
                       className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"/>
                <div className="flex flex-col items-center justify-center space-y-3">
                <span
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                    <Icons id="file-upload" width="16" height="16" viewBox="0 0 16 16" className="fill-primary"/>
                </span>

                    <p>
                        <span className="text-primary">Click to upload</span> or drag and drop
                    </p>
                    <p className="mt-1.5">PNG or JPG</p>
                    <p>(max, 800 X 800px)</p>
                </div>
            </div>

            <div className="flex justify-end gap-4.5">
                {children}
            </div>

        </>

    );
}