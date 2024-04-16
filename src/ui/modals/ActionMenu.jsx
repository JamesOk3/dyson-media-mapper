
import useClickOutsideEsc from "../../hooks/useClickOutsideEsc.js";
import Icons from "../Icons.jsx";
import Modal from "./Modal.jsx";
import ConfirmDelete from "./ConfirmDelete.jsx";

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
function ActionMenu({onDelete, onEdit, onView, id}) {

    const {dropdownOpen, setDropdownOpen, triggerRef, dropdownRef} = useClickOutsideEsc();

    return (
        <div className="relative flex">
            <button className="text-[#98A6AD] hover:text-body"
                    ref={triggerRef}
                    onClick={() => setDropdownOpen(!dropdownOpen)}>
                <Icons id="dots"/>
            </button>

            <div ref={dropdownRef}
                 onFocus={() => setDropdownOpen(true)}
                 onBlur={() => setDropdownOpen(false)}
                 className={`absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${
                     dropdownOpen ? 'block' : 'hidden'
                 }`}>
                <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                    <Icons id="view"/> Details
                </button>
                <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
                        onClick={() => onEdit(id)}>
                    <Icons id="edit"/> Edit
                </button>

                <Modal>
                    <Modal.Open opens="delete">
                        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-4">
                            <Icons id="trash"/> Delete
                        </button>
                    </Modal.Open>
                    <Modal.Window name="delete" type="danger">
                        <ConfirmDelete id={id} resourceName="Product" onConfirm={onDelete}/>
                    </Modal.Window>
                </Modal>

            </div>
        </div>
    );
}
export default ActionMenu;