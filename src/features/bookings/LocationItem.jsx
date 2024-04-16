import ButtonWithIcon from "../../ui/buttons/ButtonWithIcon.jsx";

function LocationItem({location}) {
    return (
        <li className="flex items-center justify-between  mt-3 border-b border-slate-200 dark:border-slate-700  text-black dark:text-white">
            <span>{location}</span>
            <span className="ml-auto flex">
                {/*<ButtonWithIcon type="view"/>*/}
                <ButtonWithIcon type="edit"/>
                <ButtonWithIcon type="delete"/>
            </span>
        </li>
    );
}
export default LocationItem;