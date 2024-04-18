import Icons from "../Icons.jsx";
import Modal from "../modals/Modal.jsx";
import ConfirmDelete from "../modals/ConfirmDelete.jsx";

/**
 * Renders a button component with an icon based on the type provided.
 *
 * @param {string} type - The type of button (view, edit, delete, add).
 * @param {string} name - The name to display on the button.
 * @param {string} id - The unique identifier of the button.
 * @param {string} resourceName - The name of the resource tied to the button.
 * @param {function} onClick - The function to execute on button click.
 * @return {JSX.Element} The button component with the specified type and icon.
 *
 * @author James M Kambanga
 * Date: March 30, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function ButtonWithIcon({type, name, id, resourceName, onClick}) {
    const btnStyles = "btn dark:bg-slate-800 hover:border-primary  border-slate-200 dark:border-slate-700 dark:hover:border-slate-600";
    const iconStyles = "w-4 h-4 fill-current shrink-0";
    const spanStyles = "ml-2";

    return (
        <div className="m-1.5">

            {type === "view" && (
                <button onClick={onClick} className={`${btnStyles} text-slate-600 dark:text-slate-300`}>
                    <Icons id="view" width="18" height="18"  viewBox="0 0 18 18"
                           className={`${iconStyles} 'text-slate-500 dark:text-slate-400 shrink-0'`}/>
                    <span className={spanStyles}>View</span>
                </button>
            )}

            {type === "edit" && (
                <button onClick={onClick} className={`${btnStyles} text-slate-600 dark:text-slate-300`}>
                    <Icons id="edit" viewBox="0 0 16 16"
                           className={`${iconStyles} text-slate-500 dark:text-slate-400 shrink-0`}/>
                    <span className={spanStyles}>Edit</span>
                </button>
            )}

            {type === "delete" && (
                <Modal>
                    <Modal.Open opens="delete">
                        <button className={`${btnStyles} text-rose-500`}>
                            <Icons id="trash" viewBox="0 0 16 16"
                                   className={`${iconStyles}`} />
                            <span className={spanStyles}>Delete</span>
                        </button>
                    </Modal.Open>
                    <Modal.Window name="delete" type="danger">
                        <ConfirmDelete id={id} resourceName={resourceName} onConfirm={onClick}/>
                    </Modal.Window>
                </Modal>
            )}

            {type === "add" && (
                <button onClick={onClick} className={`${btnStyles} hover:text-primary text-slate-600 dark:text-slate-300`}>
                    <span className={spanStyles}>{name}</span>
                </button>
            )}

        </div>
    );
}

export default ButtonWithIcon;