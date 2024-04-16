import { useState } from 'react';
import { Link } from 'react-router-dom';

import Icons from "../../ui/Icons.jsx";
import UserOne from '../../images/user/user-01.png';
import UserTwo from '../../images/user/user-02.png';
import UserThree from '../../images/user/user-03.png';
import UserFour from '../../images/user/user-04.png';
import useClickOutsideEsc from "../../hooks/useClickOutsideEsc.js";

/**
 * Generates a dropdown message component that displays a list of new messages.
 *
 * @return {JSX.Element} The dropdown message component
 *
 * @author James M Kambanga
 * Date: March 28, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
const DropdownMessage = () => {
    const {dropdownOpen, setDropdownOpen, triggerRef, dropdownRef} = useClickOutsideEsc();
    const [notifying, setNotifying] = useState(true)


    return (
        <li className="relative">
            <Link ref={triggerRef}
                onClick={() => {
                    setNotifying(false)
                    setDropdownOpen(!dropdownOpen)
                }}
                className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                to="#">
                <span className={`absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? "hidden" : "inline"}`}>
                  <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
                </span>

                <Icons id="message" className="fill-current duration-300 ease-in-out" />

            </Link>
            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdownRef}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
                    dropdownOpen === true ? 'block' : 'hidden'
                }`}
            >
                <div className="px-4.5 py-3">
                    <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
                </div>

                <ul className="flex h-auto flex-col overflow-y-auto">
                    <li>
                        <Link className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                            to="/messages">
                            <div className="h-12.5 w-12.5 rounded-full">
                                <img src={UserTwo} alt="User" />
                            </div>

                            <div>
                                <h6 className="text-sm font-medium text-black dark:text-white">
                                    James Kambanga
                                </h6>
                                <p className="text-sm">Let us get started 💪</p>
                                <p className="text-xs">2min ago</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                            to="/messages">
                            <div className="h-12.5 w-12.5 rounded-full">
                                <img src={UserOne} alt="User" />
                            </div>

                            <div>
                                <h6 className="text-sm font-medium text-black dark:text-white">
                                    Alma James
                                </h6>
                                <p className="text-sm">I am interested in your team</p>
                                <p className="text-xs">10min ago</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                            to="/messages">
                            <div className="h-12.5 w-12.5 rounded-full">
                                <img src={UserThree} alt="User" />
                            </div>

                            <div>
                                <h6 className="text-sm font-medium text-black dark:text-white">
                                    Grace Morrow
                                </h6>
                                <p className="text-sm">I cam across your report and...</p>
                                <p className="text-xs">1day ago</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                            to="/messages">
                            <div className="h-12.5 w-12.5 rounded-full">
                                <img src={UserFour} alt="User" />
                            </div>

                            <div>
                                <h6 className="text-sm font-medium text-black dark:text-white">
                                    Herriet Mesa
                                </h6>
                                <p className="text-sm">I’m waiting for you response!</p>
                                <p className="text-xs">5days ago</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                            to="/messages">
                            <div className="h-12.5 w-12.5 rounded-full">
                                <img src={UserTwo} alt="User" />
                            </div>

                            <div>
                                <h6 className="text-sm font-medium text-black dark:text-white">
                                    James Ok
                                </h6>
                                <p className="text-sm">I like your confidence 💪</p>
                                <p className="text-xs">2min ago</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <!-- Dropdown End --> */}
        </li>
    )
}

export default DropdownMessage
