import {createContext, useContext, useEffect, useRef, useState} from "react";
import Icons from "../Icons.jsx";
import {createPortal} from "react-dom";

/**
 * Dropdown component that handles opening and closing of the dropdown menu.
 * (the dropdown provides view, edit, and delete buttons)
 *
 * @return {JSX.Element} The dropdown component JSX
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */


const buttonStyles = "flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4";
const MenusContext = createContext();
function ContextMenu({children}) {
    const [openId, setOpenId] = useState('');
    const [position, setPosition] = useState(null);

    const close = () => setOpenId('');
    const open = (id) => setOpenId(id);

    return (
        <MenusContext.Provider value={{openId, close, open, position, setPosition}}>
            {children}
        </MenusContext.Provider>
);
}

function Menus({children}) {
    return (
        <div className=" flex items-center justify-center">
            {children}
        </div>
    )
}

function Toggle({id}) {
    const {openId, close, open, setPosition} = useContext(MenusContext);
    function handleClick(e) {
        const rect = e.target.closest('button').getBoundingClientRect();
        setPosition({
            x: window.innerWidth - rect.width - rect.x,
            y: rect.y + rect.height + 8,
        })
        openId === '' || openId !== id ? open(id) : close();
    }
    return (
        <button onClick={handleClick} className="text-[#98A6AD] hover:text-body">
            <Icons id="dots"/>
        </button>
    )
}

function List({id, children}) {
    const {openId, position} = useContext(MenusContext);
    if (openId !== id) return null;

    return createPortal (
        <ul className={`fixed right-${position.x} top-${position.y} z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark`}>
            {children}
        </ul>,
        document.body
    )}

function Button({children}) {
    return (
        <li>
            <button className={buttonStyles}>
                {children}
            </button>
        </li>
    )
}

ContextMenu.Menus = Menus;
ContextMenu.Toggle = Toggle;
ContextMenu.List = List;
ContextMenu.Button = Button;

export default ContextMenu;