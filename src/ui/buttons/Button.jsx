import Icons from "../Icons.jsx";

/**
 * Renders a Button component with the specified variation, type, size, and children.
 *
 * @param {string} variation - The variation of the button (either 'primary' or 'secondary').
 * @param {string} type - The type of the button.
 * @param {string} size - The size of the button (either 'large' or 'small').
 * @param {string} children - The content to be displayed inside the button.
 * @return {JSX.Element} A Button component based on the specified variation.
 *
 * @author James M Kambanga
 * Date: March 31, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function Button({variation = "primary", type = "submit", size = "large", children, onClick}) {

    const btnSizeStyles = size === "large" ? "w-full py-3" : "px-6 py-3";

    const baseStyles = `flex justify-center rounded font-medium ${btnSizeStyles}`;


    if (variation === "primary") {
        return (
            <button onClick={onClick} type={type}
                    className={`bg-primary text-gray hover:bg-opacity-90 ${baseStyles}`}>
                {children}
            </button>
        );
    }

    if (variation === "secondary") {
        return (
            <button onClick={onClick} type={type}
                className={`border border-stroke text-black hover:shadow-1 hover:border-primary dark:border-strokedark dark:hover:border-primary dark:text-white ${baseStyles}`}>
                {children}
            </button>
        );
    }

}

export function AddButton({onClick, label}) {
    return (
        <Button onClick={onClick} size="small" variation="primary">
            <div className="flex items-center">
                <Icons id="plus" viewBox="0 0 16 16" className="fill-current opacity-50 shrink-0"/>
                <span className="hidden sm:block ml-2">{label}</span>
            </div>
        </Button>
    );
}

export function ButtonGroup({children}) {
    return (
        <div className="flex justify-end gap-4.5">
            {children}
        </div>
    );
}

