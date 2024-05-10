import {Link} from "react-router-dom";

/**
 * Renders an upcoming event item with the provided data.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - children: ReactNode - The content of the item.
 *   - icon: ReactNode - The icon to display.
 *   - link: string - The link to navigate to when the item is clicked.
 * @return {JSX.Element} The rendered upcoming event item.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function UpcomingEventsItem({children, icon, link}) {

    return (
        <li className="flex px-2">
            <div className="w-5 h-5 flex items-center justify-center rounded-full shrink-0 bg-indigo-400 my-2 mr-3">
                {icon}
            </div>
            <div className="grow flex items-center border-b border-slate-100 dark:border-slate-700 text-sm py-2">
                <div className="grow flex justify-between">
                    <div className="self-center text-black dark:text-white">
                        {children}
                    </div>
                    <div className="shrink-0 self-end ml-2">
                        <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                              to={link}>View &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default UpcomingEventsItem;

