import {NavLink} from "react-router-dom";

/**
 * Render a button link component that changes styles based on the 'active' prop.
 *
 * @param {string} to - The destination URL for the link.
 * @param {string} children - The content to display within the link.
 * @param {boolean} active - A boolean indicating if the link should have active styles.
 * @return {JSX.Element} The rendered button link component.
 *
 * @author James M Kambanga
 * Date: March 30, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function ButtonLink({to, children, active}) {

    const activeStyles = "bg-primary text-white";
    const inactiveStyles = "bg-gray dark:bg-meta-4 text-black dark:text-white";
    return (
        <NavLink to={to}
                 className={`rounded-md py-3 px-4 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                  active ? activeStyles : inactiveStyles
              }`}>
            {children}
        </NavLink>
    );
}

/**
 * Generate a button link group with provided children elements.
 *
 * @param {object} children - The children elements to be displayed within the button link group.
 * @return {JSX.Element} The button link group component.
 *
 * @author James M Kambanga
 * Date: March 30, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function ButtonLinkGroup({children}) {
    return (
        <div className="mb-7.5 flex flex-wrap gap-3 border-b border-stroke pb-5 dark:border-strokedark">
            {children}
        </div>
    );
}

/**
 * Function that renders a container for button links with specific styling.
 *
 * @param {Object} children - The child elements to be rendered inside the container.
 * @return {JSX.Element} The container component with the provided children.
 *
 * @author James M Kambanga
 * Date: March 30, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
export function ButtonLinkContainer({children}) {
    return (
        <div className="rounded-sm border-b border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            {children}
        </div>
    );
}