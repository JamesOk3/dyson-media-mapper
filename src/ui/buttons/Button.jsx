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
export function Button({variation = "primary", type = "submit", size = "large", children, onClick, disabled}) {

    const btnSizeStyles = size === "large" ? "w-full py-3" : "px-6 py-3";

    const baseStyles = `flex justify-center rounded font-medium ${btnSizeStyles}`;


    if (variation === "primary") {
        return (
            <button disabled={disabled} onClick={onClick} type={type}
                    className={`bg-primary text-gray hover:bg-opacity-90 ${baseStyles}`}>
                {children}
            </button>
        );
    }

    if (variation === "secondary") {
        return (
            <button disabled={disabled} onClick={onClick} type={type}
                className={`border border-stroke text-black hover:shadow-1 hover:border-primary dark:border-strokedark dark:hover:border-primary dark:text-white ${baseStyles}`}>
                {children}
            </button>
        );
    }

    if (variation === "success") {
        return (
            <button disabled={disabled} onClick={onClick} type={type}
                    className={`bg-success text-gray hover:bg-opacity-90 ${baseStyles}`}>
                {children}
            </button>
        );
    }
    if (variation === "warning") {
        return (
            <button disabled={disabled} onClick={onClick} type={type}
                    className={`bg-rose-400 text-gray hover:bg-opacity-90 ${baseStyles}`}>
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

export function EditButton({onClick}) {
    return (
        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:text-primary hover:bg-gray dark:hover:bg-meta-4"
            onClick={onClick}
        ><Icons id="edit"/>
        </button>
    );
}

export function ViewButton({onClick, children}) {
    return (
        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
            onClick={onClick}>
            <Icons id="view"/> {children}
        </button>
    );
}

export function ApproveButton({onClick, children, type}) {
    return (
        <button className={`flex items-center gap-0.5 rounded-md ${type === "small" ? "p-1 text-sm" : "px-4 py-3 font-medium"}  text-left bg-emerald-100 text-emerald-600 hover:bg-emerald-200 hover:text-emerald-700 dark:bg-emerald-400/30  dark:text-emerald-400`}
                onClick={onClick}>
            <Icons id="check" className="w-4 h-4 fill-current shrink-0"  viewBox="0 0 16 16"/> {children}
        </button>
    );
}
export function RejectButton({onClick, children, type}) {
    return (
        <button className={`flex items-center rounded-md gap-0.5  text-rose-500 hover:bg-rose-200 ${type === "small" ? "p-1 text-sm" : "px-4 py-3 font-medium"}  text-left `}
                onClick={onClick}>
            <Icons id="close" className="w-4 h-4 fill-current shrink-0"   /> {children}
        </button>
    );
}

export function MoreButton({onClick, children}) {
    return (
        <button onClick={onClick}
            className="group relative flex items-center gap-2.5 rounded-sm px-4 py-1 text-sm text-indigo-500 hover:text-primary duration-300 ease-in-out">
            <p>{children}</p>
            <Icons id="down-arrow" width="20" height="20" viewBox="0 0 20 20"
                   className="absolute -right-2 top-1/2 -translate-y-1/2 fill-current"
            />
        </button>
    );
}
