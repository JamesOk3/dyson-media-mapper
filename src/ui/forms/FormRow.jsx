/**
 * Generates a form row with a label, optional icon, and children.
 *
 * @param {object} props - Object containing label, icon, and children properties.
 * @return {JSX.Element} A div element representing a form row.
 *
 * @author James M Kambanga
 * Date: April 1, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function FormRow( { label, id, icon, children, button, error} ) {
    return (
        // <div className="w-full xl:w-1/2">
        <div className="mb-5.5">
            <label htmlFor={id} className="mb-3 block  font-medium text-black dark:text-white">
                {label}
            </label>
            {icon || button ? (
                <div className="relative">
                    <span className={`absolute ${icon ? 'left-4.5 top-4' : 'right-0'}`}>
                        {icon} {button}
                    </span>
                    {children}
                </div>
            ): children}

            {error && <p className="text-sm mt-1 text-rose-500">{error}</p>}
        </div>
    );
}

export default FormRow;