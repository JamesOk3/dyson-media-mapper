import {Link} from "react-router-dom";

/**
 * Renders a data item component.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - {ReactNode} icon - The icon to display.
 *   - {string} title - The title of the data item.
 *   - {string} value - The value of the data item.
 *   - {string} style - The style of the data item.
 *   - {string} link - The link to navigate to when the data item is clicked.
 * @return {JSX.Element} The rendered data item component.
 *
 * @author James M Kambanga
 * Date: May 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function DataItem({icon, title, value, style, link}) {
    return (
        <div className="xl:p-7.5 relative rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6">
            {/*<div className="flex items-end justify-between">*/}
            <div className="grid gap-3 grid-cols-[auto_1fr] ">
                <div className={`row-span-full text-2xl w-14 h-14 flex items-center justify-center rounded-full ${style}`}>
                    {icon}
                </div>

                <div >
                    <Link to={link} className="text-title-sm text-gray-500 hover:text-primary dark:hover:text-primary">
                        <p >{title}</p>
                    </Link>
                    <p className="text-title-sm2 font-semibold">{value}</p>
                </div>
            </div>

            <div className="absolute bottom-1 right-3">
                <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                      to={link}>More Details &rarr;
                </Link>
            </div>
        </div>
    );
}

export default DataItem;