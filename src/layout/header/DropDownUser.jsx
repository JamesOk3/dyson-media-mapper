import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

import Icons from "../../ui/Icons.jsx";
import {useLogout} from "../../features/auth/hooks/useLogout.js";
import {useUser} from "../../features/auth/hooks/useUser.js";
import defaultUser from "../../images/user/default-user.jpeg";

/**
 * Renders a dropdown menu for the user profile.
 *
 * @return {JSX.Element} The JSX element with user's dropdown menu.
 *
 * @author James M Kambanga
 * Date: March 28, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function DropDownUser (){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {logout, isPending} = useLogout();
    const {user, appRole} = useUser();
    // const { appRole, user_metadata: {firstName, avatar} } = user || {};
    const {firstName, avatar} = user?.user_metadata || {};

    const trigger = useRef(null)
    const dropdown = useRef(null)

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdown.current) return
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
                return

            setDropdownOpen(false)
        }
        document.addEventListener("click", clickHandler)
        return () => document.removeEventListener("click", clickHandler)
    })

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return

            setDropdownOpen(false)
        }
        document.addEventListener("keydown", keyHandler)
        return () => document.removeEventListener("keydown", keyHandler)
    })

    return (
        <div className="relative">
            <Link ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-4"
                to="#">
                <span className="hidden text-right lg:block">
                  <span className="block text-sm font-medium text-black dark:text-white">{firstName}</span>
                  <span className="block text-xs">{appRole}</span>
                </span>

                <span className="h-12 w-12 rounded-full">
                  <img src={avatar} alt="User image"
                       onError={e => e.target.src = defaultUser}
                  />
                </span>
                <Icons className="hidden fill-current sm:block" id="chevron-down" width="12" height="8" viewBox="0 0 12 8"/>

            </Link>
            {/* <!-- Dropdown Start --> */}
            <div ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
                    dropdownOpen === true ? 'block' : 'hidden'
                }`}>
                <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                    <li>
                        <Link to="account"
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                            <Icons id="user" width="22" height="22" viewBox="0 0 22 22"/>My Profile
                        </Link>
                    </li>

                    {appRole !== "admin" && (
                        <li>
                            <Link to="#0"
                                  className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                                <Icons id="contact" width="22" height="22" viewBox="0 0 22 22"/>My Team
                            </Link>
                        </li>
                    )}

                    <li>
                        <Link to="/settings"
                              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                            <Icons id="settings" viewBox="0 0 64 64"/>Account Settings
                        </Link>
                    </li>
                </ul>
                <button onClick={logout} className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
                    <Icons id="logout" width="22" height="22" viewBox="0 0 22 22"/>Log Out
                </button>
            </div>
            {/* <!-- Dropdown End --> */}
        </div>
    )
}

export default DropDownUser