import {Link} from "react-router-dom";
import DropDownNotification from "./DropDownNotification.jsx";
import DropDownMessage from "./DropDownMessage.jsx";
import DropDownUser from "./DropDownUser.jsx";
import DarkModeSwitcher from "./DarkModeSwitcher.jsx";
import LogoIcon from '../../images/logo/my-dyson-logo.png';
import Icons from "../../ui/Icons.jsx";

/**
 * The Header component - renders the header component.
 * @includes DropDownNotification, DarkModeSwitcher, DropDownMessage, DropDownUser components
 *
 * @param {boolean} sidebarOpen - The condition determining whether the sidebar is open or not.
 * @param {function} setSidebarOpen - The function to set the sidebar open/close state.
 * @return {JSX.Element} The sidebar component with menu links
 *
 * @author James M Kambanga
 * Date: March 28, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function Header({ sidebarOpen, setSidebarOpen }) {
    return (
        <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden">
                        <span className="relative block h-5.5 w-5.5 cursor-pointer">
                          <span className="du-block absolute right-0 h-full w-full">
                            <span
                                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                                    !sidebarOpen && '!w-full delay-300'
                                }`}
                            ></span>
                            <span
                                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                                    !sidebarOpen && 'delay-400 !w-full'
                                }`}
                            ></span>
                            <span
                                className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                                    !sidebarOpen && '!w-full delay-500'
                                }`}
                            ></span>
                          </span>
                          <span className="absolute right-0 h-full w-full rotate-45">
                            <span
                                className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                                    !sidebarOpen && '!h-0 !delay-[0]'
                                }`}
                            ></span>
                            <span
                                className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                                    !sidebarOpen && '!h-0 !delay-200'
                                }`}
                            ></span>
                          </span>
                        </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}

                    <Link className="block flex-shrink-0 lg:hidden" to="/">
                        <img className="h-6" src={LogoIcon} alt="Logo"/>
                    </Link>
                </div>

                <div className="hidden sm:block">
                    <form action="https://formbold.com/s/unique_form_id" method="POST">
                        <div className="relative">
                            <button className="absolute left-0 top-1/2 -translate-y-1/2">
                                <Icons id="search-icon" width="20" height="20" viewBox="0 0 20 20"/>
                            </button>

                            <input type="text"
                                placeholder="Type to search..."
                                className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white xl:w-125"
                            />
                        </div>
                    </form>
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        {/* <!-- Dark Mode Toggler --> */}
                        <DarkModeSwitcher/>
                        {/* <!-- Dark Mode Toggler --> */}

                        {/* <!-- Notification Menu Area --> */}
                        <DropDownNotification/>
                        {/* <!-- Notification Menu Area --> */}

                        {/* <!-- Chat Notification Area --> */}
                        <DropDownMessage/>
                        {/* <!-- Chat Notification Area --> */}
                    </ul>

                    {/* <!-- User Area --> */}
                    <DropDownUser/>
                    {/* <!-- User Area --> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
