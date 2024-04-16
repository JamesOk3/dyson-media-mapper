import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Icons from "../../ui/Icons.jsx";
import useClickOutsideEsc from "../../hooks/useClickOutsideEsc.js";

/**
 * Renders a dropdown notification component.
 * Displays a list of notifications if any.
 *
 * @return {JSX.Element} The rendered dropdown notification component.
 *
 * @author James M Kambanga
 * Date: March 28, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function DropDownNotification() {
    const {dropdownOpen, setDropdownOpen, triggerRef, dropdownRef} = useClickOutsideEsc();
    const [notifying, setNotifying] = useState(true)


    return (
        <li className="relative">
            <Link to="#"
                className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                 ref={triggerRef}
                onClick={() => {
                    setNotifying(false)
                    setDropdownOpen(!dropdownOpen)
                }}>
            <span
                className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${
                    notifying === false ? "hidden" : "inline"
                }`}>
              <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
            </span>
                <Icons id="notification" className="fill-current duration-300 ease-in-out" />
            </Link>

            <div ref={dropdownRef}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
                    dropdownOpen === true ? "block" : "hidden"
                }`}>
                <div className="px-4.5 py-3">
                    <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
                </div>
                <ul className="flex h-auto flex-col overflow-y-auto">
                    <li>
                        <Link className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="#">
                            <p className="text-sm"> <span className="text-black dark:text-white">Report from Newcastle Team</span>{' '}
                                The newly established media team has held first event
                                at Newcastle Upon Tyne.
                            </p>
                            <p className="text-xs">12 March, 2024</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="#">
                            <p className="text-sm"><span className="text-black dark:text-white">London Exhibition Report</span>{' '}
                                The atmosphere was so impressive with the entire team
                            </p>
                            <p className="text-xs">24 Feb, 2024</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="#">
                            <p className="text-sm"><span className="text-black dark:text-white">Newly introduced product</span>{' '}
                                has been posted on the media mapper application
                            </p>
                            <p className="text-xs">04 Feb, 4</p>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="#">
                            <p className="text-sm"><span className="text-black dark:text-white">There are many variations</span>{' '}
                                of dyson vacuum cleaners. the latest model is
                            </p>
                            <p className="text-xs">31 Jan, 2024</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default DropDownNotification
