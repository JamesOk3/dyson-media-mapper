import {useState, createContext, useContext, cloneElement} from 'react';
import Icons from "../Icons.jsx";
import {createPortal} from "react-dom";
import {useOutsideClick} from "../../hooks/useOutsideClick.js";

const ModalContext = createContext();

/**
 * Generate a modal component with the given children.
 *
 * @param {object} children - The children elements to be displayed in the modal.
 * @return {JSX.Element} The modal component with the provided children.
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function Modal ({ children }) {
    const [openName, setOpenName] = useState("");
    const close = () => setOpenName("");
    const open = (name) => setOpenName(name);
    return (
        <ModalContext.Provider value={{ openName, setOpenName, close, open }}>
            {children}
        </ModalContext.Provider>
    );
}

/**
 * Function to open a modal window when the provided children element is clicked.
 *
 * @param {object} children - The element that triggers the modal opening.
 * @param {string} opensWindowName - The name of the window to open.
 * @return {ReactElement} A clone of the children element with an onClick event listener to open the modal.
 */
function Open ( { children, opens: opensWindowName } ) {
    const { open } = useContext(ModalContext);

    return cloneElement(children, { onClick: () => open(opensWindowName) });
}

/**
 * Generate a modal window based on the provided props.
 *
 * @param {object} children - The content to be displayed inside the modal window.
 * @param {string} name - The name of the modal window.
 * @param {string} type - The type of the modal window.
 * @return {ReactNode} The modal window component.
 */

function Window({children, name, type}) {
    const {openName, close} = useContext(ModalContext)
    const ref = useOutsideClick(close);

    if (name !== openName) return null;

    return createPortal (
        <div className={`fixed left-0 top-0 z-9999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 `}>
            <div ref={ref} className="relative md:px-15 w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:py-15">
                {type && (
                    <button className={`absolute right-6 top-6 flex h-7 w-7 items-center justify-center rounded-full ${type === "danger" ? "bg-rose-200 text-rose-600" : "bg-primary"}  text-gray hover:bg-opacity-90 hover:text-white`}
                        onClick={close}>
                        <Icons id="close" height="10" width="10" viewBox="0 0 13 13"
                               className="fill-current stroke-current"/>
                    </button>
                )}
                <div>{cloneElement(children, {onCloseModal: close})}</div>
            </div>
        </div>,
        document.body
    )

}

Modal.Open = Open;

Modal.Window = Window;

export default Modal;

