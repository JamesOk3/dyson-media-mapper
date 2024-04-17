import ButtonWithIcon from "../buttons/ButtonWithIcon.jsx";

/**
 * Component for rendering a list item with data, edit, and delete functionality.
 *
 * @param {object} data - The data to be displayed in the list item.
 * @param {string} id - The unique identifier of the list item.
 * @param {string} name - The name associated with the list item.
 * @param {function} onDelete - The function to handle deletion of the list item.
 * @param {function} onEdit - The function to handle editing of the list item.
 * @param {ReactNode} children - Additional children components to be rendered within the list item.
 * @return {ReactNode} The rendered list item component.
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function ListItem({data, id, name, onDelete, onEdit, children}) {
    return (
        <li className="flex flex-col mt-3 border-b border-slate-200 dark:border-slate-700  text-black dark:text-white">
            <div className="flex items-center justify-between">
                <span>{data}</span>
                <span className="ml-auto flex">
                <ButtonWithIcon onClick={onEdit} type="edit"/>

                <ButtonWithIcon id={id} type="delete" resourceName={name} onClick={onDelete}/>
            </span>
            </div>

            <div>{children}</div>
        </li>
    );
}

export default ListItem;