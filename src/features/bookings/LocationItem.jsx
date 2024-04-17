import ButtonWithIcon from "../../ui/buttons/ButtonWithIcon.jsx";

/**
 * Renders a location item with the provided location data.
 *
 * @param {object} location - The location to display in the list item.
 * @return {JSX.Element} The location item component.
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
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