import {useLocation} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

function useSideBar({ sidebarOpen, setSidebarOpen }) {

    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded")
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    )

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        }
        document.addEventListener("click", clickHandler)
        return () => document.removeEventListener("click", clickHandler)
    })

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return
            setSidebarOpen(false)
        }
        document.addEventListener("keydown", keyHandler)
        return () => document.removeEventListener("keydown", keyHandler)
    })

    // close on route change
    useEffect(() => {
        sidebarOpen && setSidebarOpen(false)
    }, [pathname]);


    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString())
        document.querySelector("body")?.classList.toggle("sidebar-expanded", sidebarExpanded);

    }, [sidebarExpanded])

return {pathname, trigger, sidebar, sidebarExpanded, setSidebarExpanded}
}

export default useSideBar