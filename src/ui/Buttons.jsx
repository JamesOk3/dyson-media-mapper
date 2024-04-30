export function Buttons({variation = "primary", type = "submit", size = "large", children}) {

    const btnSizeStyles = size === "large" ? "w-full py-3" : "px-6 py-2";

    const baseStyles = `flex justify-center rounded font-medium ${btnSizeStyles}`;


    if (variation === "primary") {
        return (
            <button type={type}
                    className={`bg-primary text-gray hover:bg-opacity-90 ${baseStyles}`}>
                {children}
            </button>
        );
    }

    if (variation === "secondary") {
        return (
            <button type={type}
                className={`border border-stroke text-black hover:shadow-1 hover:border-primary dark:border-strokedark dark:hover:border-primary dark:text-white ${baseStyles}`}>
                {children}
            </button>
        );
    }

}

export function ButtonGroup({children}) {
    return (
        <div className="flex justify-end gap-4.5">
            {children}
        </div>
    );
}

export default Buttons;
