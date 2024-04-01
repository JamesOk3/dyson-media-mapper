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
function FormRow( { label, icon, children} ) {
    return (
        // <div className="w-full xl:w-1/2">
        <div className="mb-5.5">
            <label htmlFor={label} className="mb-3 block text-sm font-medium text-black dark:text-white">
                {label}
            </label>
            {icon ? (
                <div className="relative">
                    <span className="absolute left-4.5 top-4">
                        {icon}
                    </span>
                    {children}
                </div>
            ): children}
        </div>
    );
}

export default FormRow;