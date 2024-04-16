import ButtonWithIcon from "../buttons/ButtonWithIcon.jsx";

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