import {Link, NavLink} from "react-router-dom";
import {useState} from "react";

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

export function ButtonLinkGroup({children}) {
    return (
        <div className="mb-7.5 flex flex-wrap gap-3 border-b border-stroke pb-5 dark:border-strokedark">
            {children}
        </div>
    );
}

export function ButtonLinkContainer({children}) {
    return (
        <div className="rounded-sm border-b border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            {children}
        </div>
    );
}