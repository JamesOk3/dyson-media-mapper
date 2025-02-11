import React from "react"
import {Link, NavLink} from "react-router-dom"
import SidebarLinkGroup from "./SideBarLinkGroup.jsx";
import Logo from "../../images/logo/dyson-white.png";
import Icons from "../../ui/Icons.jsx"
import useSideBar from "./useSideBar.js";
import ability from "../../features/auth/permissions/ability.js";
import {AbilityContext} from "../../features/auth/permissions/Can.js";
import {useUser} from "../../features/auth/hooks/useUser.js";


/**
 * Sidebar component that renders the sidebar and the app's menu links.
 * @param {boolean} sidebarOpen - The condition determining whether the sidebar is open or not.
 * @param {function} setSidebarOpen - The function to set the sidebar open/close state.
 * @return {JSX.Element} The sidebar component with menu links
 *
 * @author James M Kambanga
 * Date: March 29, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function Sidebar ({ sidebarOpen, setSidebarOpen })  {
    const { appRole } = useUser();
    const {
        pathname,
        trigger,
        sidebar,
        sidebarExpanded,
        setSidebarExpanded
    } = useSideBar({ sidebarOpen, setSidebarOpen });

    return (
        <AbilityContext.Provider value={ability}>

        <aside ref={sidebar}
            className={`absolute left-0 top-0 z-999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <Link to="/">
                    <img className="h-16" src={Logo} alt="Logo" />
                </Link>

                <button ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden">
                    <Icons id="left-arrow" width="20" height="18" viewBox="0 0 20 18"/>
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
                    {/* <!-- Menu Group --> */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>

                        <ul className="mb-6 flex flex-col gap-1.5" >

                            {/* <!-- Menu Item Dashboard --> */}
                            <li>
                                <NavLink to="/dashboard"
                                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 
                                         ${(pathname === "/" || pathname.includes("dashboard")) && "bg-graydark dark:bg-meta-4"}`}>
                                    <Icons id="dashboard"/> Dashboard
                                </NavLink>
                            </li>
                            {/* <!-- Menu Item Dashboard --> */}

                            {/* <!-- Menu Item Products --> */}
                            <SidebarLinkGroup activeCondition={pathname.includes("products")}>

                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                            <NavLink to="#"
                                                     className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 
                                                     ${(pathname.includes("products")) && "bg-graydark dark:bg-meta-4"}`}
                                                    onClick={e => {
                                                    e.preventDefault()
                                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                                }}>
                                                <Icons id="cart-full" viewBox="0 0 64 64"/> <Link to="/products">Products</Link>

                                                <Icons id="down-arrow" width="20" height="20" viewBox="0 0 20 20"
                                                       className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`}
                                                />
                                            </NavLink>
                                            {/* <!-- Dropdown Menu Start --> */}
                                            <div className={`translate transform overflow-hidden ${!open && "hidden"}`}>
                                                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                    <li>
                                                        <NavLink to="/products/stock"
                                                            className={({isActive}) =>
                                                                "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                (isActive && "!text-white")}>Stock
                                                            <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">20</span>
                                                        </NavLink>
                                                    </li>
                                                    {appRole === "admin" && (
                                                        <>
                                                            <li>
                                                                <NavLink to="/products/categories"
                                                                         className={({isActive}) =>
                                                                             "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                             (isActive && "!text-white")}>Categories
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    to="/products/add-product"
                                                                    className={({isActive}) =>
                                                                        "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                        (isActive && "!text-white")}>Add Product
                                                                </NavLink>
                                                            </li>
                                                        </>
                                                    )}

                                                </ul>
                                            </div>
                                            {/* <!-- Dropdown Menu End --> */}
                                        </React.Fragment>
                                    )
                                }}
                            </SidebarLinkGroup>
                            {/* <!-- Menu Item Products --> */}

                            {/* <!-- Menu Item Events --> */}
                            { appRole === "admin" && (<SidebarLinkGroup activeCondition={pathname.includes("events")}>

                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                            <NavLink to="#"
                                                     className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 
                                                     ${(pathname.includes("events")) && "bg-graydark dark:bg-meta-4"}`}
                                                     onClick={e => {
                                                         e.preventDefault()
                                                         sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                                     }}>
                                                <Icons id="calendar"/><Link to="/events">Events</Link>

                                                <Icons id="down-arrow" width="20" height="20" viewBox="0 0 20 20"
                                                       className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`}
                                                />
                                            </NavLink>
                                            {/* <!-- Dropdown Menu Start --> */}
                                            <div className={`translate transform overflow-hidden ${!open && "hidden"}`}>
                                                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                    <li>
                                                        <NavLink to="/events/calendar"
                                                                 className={({isActive}) =>
                                                                     "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                     (isActive && "!text-white")}>Calendar
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/events/add-event"
                                                                 className={({isActive}) =>
                                                                     "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                     (isActive && "!text-white")}>Add Event
                                                        </NavLink>
                                                    </li>

                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    )
                                }}
                            </SidebarLinkGroup>)}
                            {/* <!-- Menu Item Events --> */}

                            {/* <!-- Menu Item Product Booking --> */}
                            <SidebarLinkGroup activeCondition={pathname.includes("bookings")}>

                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                            <NavLink to="#"
                                                     className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 
                                                     ${( pathname.includes("bookings")) && "bg-graydark dark:bg-meta-4"}`}
                                                     onClick={e => {
                                                         e.preventDefault()
                                                         sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                                     }}>
                                                <Icons id="booking"/><Link to="/bookings">Bookings</Link>
                                                <Icons id="down-arrow" width="20" height="20" viewBox="0 0 20 20"
                                                       className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`}
                                                />
                                            </NavLink>
                                            {/* <!-- Dropdown Menu Start --> */}
                                            <div className={`translate transform overflow-hidden ${!open && "hidden"}`}>
                                                <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                    <li>
                                                        <NavLink to="/bookings/product-requests"
                                                            className={({isActive}) =>
                                                                "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                (isActive && "!text-white")}>Product Requests
                                                            <span className="absolute right-4 block rounded bg-primary px-2 py-1 text-xs font-medium text-white">20</span>
                                                        </NavLink>
                                                    </li>
                                                    {appRole === "admin" && (
                                                        <li>
                                                            <NavLink to="/bookings/pickup-locations"
                                                                     className={({isActive}) =>
                                                                         "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                         (isActive && "!text-white")}>Pickup Locations
                                                            </NavLink>
                                                        </li>
                                                    )}

                                                </ul>
                                            </div>
                                            {/* <!-- Dropdown Menu End --> */}
                                        </React.Fragment>
                                    )
                                }}
                            </SidebarLinkGroup>
                            {/* <!-- Menu Item Product Booking --> */}

                            {/* <!-- Menu Item Teams --> */}
                            {appRole === "admin" && (
                                <>
                                <li>
                                    <NavLink to="/teams"
                                             className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes(
                                                 "teams") && "bg-graydark dark:bg-meta-4"}`}>
                                        <Icons id="team" width="20" height="20" viewBox="0 0 64 64"/>Teams
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/users"
                                             className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes(
                                                 "users") && "bg-graydark dark:bg-meta-4"}`}>
                                        <Icons id="users" width="20" height="20" viewBox="0 0 64 64"/>Users
                                    </NavLink>
                                </li>


                                <li>
                                    <NavLink to="/guests"
                                             className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes(
                                            "guests") && "bg-graydark dark:bg-meta-4"}`}>
                                        <Icons id="guest" width="20" height="20" viewBox="0 0 64 64"/>Guests
                                    </NavLink>
                                </li>
                                {/* <!-- Menu Item Guests --> */}

                                {/* <!-- Menu Item Reports and Analytics --> */}
                                <SidebarLinkGroup activeCondition={pathname.includes("reports")}>

                                    {(handleClick, open) => {
                                        return (
                                            <React.Fragment>
                                                <NavLink to="#"
                                                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 
                                                         ${( pathname.includes("reports")) && "bg-graydark dark:bg-meta-4"}`}
                                                         onClick={e => {
                                                             e.preventDefault()
                                                             sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                                         }}>
                                                    <Icons id="bar-chart" width="20" height="20" viewBox="0 0 64 64"/>
                                                    <Link to="/reports">Reports and Analytics</Link>
                                                    <Icons id="down-arrow" width="20" height="20" viewBox="0 0 20 20"
                                                           className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`}
                                                    />
                                                </NavLink>
                                                {/* <!-- Dropdown Menu Start --> */}
                                                <div className={`translate transform overflow-hidden ${!open && "hidden"}`}>
                                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                        <li>
                                                            <NavLink to="/reports/customer-reports"
                                                                className={({isActive}) =>
                                                                    "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                    (isActive && "!text-white")}>General Reports
                                                            </NavLink>
                                                        </li>

                                                        <li>
                                                            <NavLink to="/reports/event-reports"
                                                                     className={({isActive}) =>
                                                                         "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                         (isActive && "!text-white")}>Product Reports
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/reports/product-reports"
                                                                className={({isActive}) =>
                                                                    "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                    (isActive && "!text-white")}>Customer Reports
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/reports/team-reports"
                                                                className={({isActive}) =>
                                                                    "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                    (isActive && "!text-white")}>Teams Reports
                                                            </NavLink>
                                                        </li>

                                                    </ul>
                                                </div>
                                                {/* <!-- Dropdown Menu End --> */}
                                            </React.Fragment>
                                        )
                                    }}
                                </SidebarLinkGroup>
                                {/* <!-- Menu Item Reports and Analytics --> */}

                                {/* <!-- Menu Item Settings --> */}
                                <SidebarLinkGroup activeCondition={pathname.includes("settings")}>

                                    {(handleClick, open) => {
                                        return (
                                            <React.Fragment>
                                                <NavLink to="#"
                                                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 
                                                         ${( pathname.includes("products")) && "bg-graydark dark:bg-meta-4"}`}
                                                         onClick={e => {
                                                             e.preventDefault()
                                                             sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                                         }}>

                                                    <Icons id="settings" width="20" height="20" viewBox="0 0 64 64"/>Settings
                                                    <Icons id="down-arrow" width="20" height="20" viewBox="0 0 20 20"
                                                           className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`}
                                                    />
                                                </NavLink>
                                                {/* <!-- Dropdown Menu Start --> */}
                                                <div
                                                    className={`translate transform overflow-hidden ${!open &&
                                                    "hidden"}`}
                                                >
                                                    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                                                        <li>
                                                            <NavLink
                                                                to="/settings/admin"
                                                                className={({isActive}) =>
                                                                    "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white " +
                                                                    (isActive && "!text-white")
                                                                }>
                                                                Administration
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- Dropdown Menu End --> */}
                                            </React.Fragment>
                                        )
                                    }}
                                </SidebarLinkGroup>
                                {/* <!-- Menu Item Settings --> */}
                              </>)}
                        </ul>
                    </div>
                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
        </AbilityContext.Provider>
    )
}

export default Sidebar
